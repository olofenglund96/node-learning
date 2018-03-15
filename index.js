const data = require('./data.js');
const machine = require('./machine.js')
const path = require("path");
const express = require('express');
const app = express();

var parsedData = data.parse();
var illustrateData = data.illustrate(parsedData, 100);
machine.learn(parsedData);

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.set('port', (process.env.PORT || 5000))

app.get('/', function (req, res) {
  res.render("example_grid", {
      images: illustrateData
  })
})

app.listen(app.get('port'), function () {
  console.log('Example app listening on port ' + app.get('port'))
})
