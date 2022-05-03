const path = require('path');
const express = require("express");
const router = express.Router();
const controller = require('../controllers/mainController');

const app = express();

controller.api;
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

router.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

router.get("/api", controller.api);

router.get("/report", controller.report);


// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

module.exports = router;
