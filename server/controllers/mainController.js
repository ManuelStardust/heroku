const request = require("request");
const AppDAO = require('./dao')

const dao = new AppDAO('./database.sqlite3')
const ActivityRepository = require('../models/activityRepository')

const ObjectsToCsv = require('objects-to-csv')

let type = '';
let activity = '';
let bored = '';
let jokeResponse = '';
let activityData = '';
let message = '';
var joke = '';

const api = function(req, res, next) {
    const activityRepo = new ActivityRepository(dao);
    activityRepo.createTable();

    if(req.query.type) type = req.query.type;


    return new Promise(resolve => {
        activity = '';
        bored = '';

        request({
            url: "https://www.boredapi.com/api/activity?type=" + type,
            method: "GET",
            headers: {},
            json: true
        }, function (error, response, body) {
            if(!error){
              bored = body;
              resolve(body);
            }
        })
    }).then(value => {
      if(bored.activity){

        activity = bored.activity;
        var boredWords = activity.split(" ");

        if(boredWords.length > 0){
          boredWords.map(function(word) {
           getJoke(word);
          });
          if(!joke) joke = 'Esta es una actividad muy aburrida';
        }

        console.log(joke);

        if(activity && joke){
          let ts = Date.now();
          let date_ob = new Date(ts);
          let dateNow =  date_ob.getFullYear() + "-" + ("0" + (date_ob.getMonth() + 1)).slice(-2) + "-" + ("0" + date_ob.getDate()).slice(-2);

          activityData = { type: bored.type, activity: bored.activity, key: bored.key, joke: joke, joke_id: jokeResponse.id, date: dateNow }

          activityRepo.create(activityData);

        }
      }else{
        activity = "No existen datos para este tipo de actividad.";
        joke = '';
      }

      res.json({ activity: activity, joke: joke, error: false, message: message });

    });

}

const getJoke = function(word){

    return new Promise(resolve => {

      request('https://v2.jokeapi.dev/joke/Any?contains=' + word, (errorJoke, responseJoke, bodyJoke)=>{
        if (!errorJoke  && responseJoke.statusCode === 200){
           jokeResponse = JSON.parse(bodyJoke);
           resolve(bodyJoke);
         }
       })
    }).then(value => {
      if(!jokeResponse.error){
        joke = jokeResponse.joke;
        if(jokeResponse.type == 'twopart'){
          joke = jokeResponse.setup + " -> " + jokeResponse.delivery;
        }
      }
    });
}

const report = function(req, res, next) {

      const activityRepo = new ActivityRepository(dao);

      return new Promise(resolve => {
          reportData = activityRepo.getAll().then(function(rest) {
              let csv = new ObjectsToCsv(rest);
              csv.toDisk("./server/public/activities.csv");
          });
          resolve(reportData);
       }).then(value => {
         res.download('./server/public/activities.csv');
      });
}


module.exports = {
  api,
  report
}
