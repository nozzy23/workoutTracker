const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use(express.static("public"));


const databaseUrl = "workout_plan";
const collections = ["exercises"];

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});


const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("this one Database Error:", error);
});


app.use(require("./routes/route"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});