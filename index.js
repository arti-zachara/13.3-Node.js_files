var fs = require("fs");
var StatMode = require("stat-mode");
var colors = require("colors");

fs.stat("./cat.jpg", function(err, stats) {
  var statMode = new StatMode(stats);
  console.log(statMode.toString());
});

fs.readFile("./tekst.txt", "utf-8", function(err, data) {
  console.log(data);
});

fs.readFile("./tekst.txt", "utf-8", function(err, data) {
  console.log("Dane przed zapisem!".blue);
  console.log(data);
  fs.appendFile("./tekst.txt", "\nA tak wyglądają po zapisie!", function(err) {
    if (err) throw err;
    console.log("Zapisano!".blue);
    fs.readFile("./tekst.txt", "utf-8", function(err, data) {
      console.log("Dane po zapisie".blue);
      console.log(data);
    });
  });
});
fs.readdir(".", function saveFile(err, files) {
  if (err) throw err;
  console.log("Directory fies have been listed");
  fs.writeFile("./message.txt", files, function(err) {
    if (err) throw err;
    console.log("File has been saved");
  });
});
