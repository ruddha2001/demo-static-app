const express = require("express");
const path = require("path");

//Creating an instance of Express
const app = express();

// Serve only the static files form the pages directory
app.use(express.static(__dirname + "/pages"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/pages/index.html"));
});

app.listen(process.env.PORT||8888);
