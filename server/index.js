const path = require('path');
const express = require("express");

const request = require("request");
const AppDAO = require('./dao')

const dao = new AppDAO('./database.sqlite3')
const ActivityRepository = require('./activityRepository')

const ObjectsToCsv = require('objects-to-csv')

const PORT = process.env.PORT || 3001;

const app = express();

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

var activity = '';

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {

  const activityRepo = new ActivityRepository(dao);
  activityRepo.createTable();

  resBored = request(boredApi, (err,response,body)=>{

    if (!err){
           const bored = JSON.parse(body);
           console.log(bored);

           activity = bored.activity;
           var jokeWords = activity.split(" ");

           console.log(jokeWords[0]);

       }
   })

  res.json({ message: activity });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
