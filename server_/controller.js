const request = require("request");
const AppDAO = require('./dao')

const dao = new AppDAO('./database.sqlite3')
const ActivityRepository = require('./activityRepository')

const ObjectsToCsv = require('objects-to-csv')


var boredApi = {
    url: 'https://www.boredapi.com/api/activity?type=recreational',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
    }
};

var jokeApi = {
    url: 'https://v2.jokeapi.dev/joke/Any?contains=friend',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
    }
};

let activity = '';
let joke = '';
let bored = '';
let jokeResponse = '';
let activityData = '';

async function api(req, res, next) {
  try {
    const activityRepo = new ActivityRepository(dao);
    activityRepo.createTable();

    resBored = request(boredApi, (err,response,body)=>{

      if (!err){
             bored = JSON.parse(body);
             console.log(bored);

             activity = bored.activity;
             var jokeWords = activity.split(" ");

         }
     })

     resJoke = request(jokeApi, (err,response,body)=>{

       if (!err){
              jokeResponse = JSON.parse(body);
              console.log(jokeResponse);

              joke = jokeResponse.joke;
              if(jokeResponse.type == 'twopart'){
                joke = jokeResponse.setup + " -> " + jokeResponse.delivery;
              }

              console.log(joke);
          }
      })

      let ts = Date.now();
      let date_ob = new Date(ts);
      let dateNow =  date_ob.getFullYear() + "-" + ("0" + (date_ob.getMonth() + 1)).slice(-2) + "-" + ("0" + date_ob.getDate()).slice(-2);

      activityData = { type: bored.type, activity: bored.activity, key: bored.key, joke: joke, joke_id: jokeResponse.id, date: dateNow }

      activityRepo.create(activityData);

    res.json({ activity: activity, joke: joke });
  } catch (err) {
      console.error(`Error while getting programming languages`, err.message);
      next(err);
  }
}
