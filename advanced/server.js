const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use("/upload", require("./routes/uploadRouter"));

app.listen("8080", () => {
  console.log("server 8080 listen ...");
});
