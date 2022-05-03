const path = require('path');
const express = require("express");

const request = require("request");
const AppDAO = require('./dao')

const dao = new AppDAO('./database.sqlite3')
const ActivityRepository = require('./activityRepository')

const ObjectsToCsv = require('objects-to-csv')

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
