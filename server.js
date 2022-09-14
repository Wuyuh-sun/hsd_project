const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./User");

app.get("/", (req, res) => {
  res.send("mongo Connected");

  mongoose.connect(
    "mongodb://localhost:27017/testdb",
    () => {
      console.log("connected");
    },
    (e) => console.error(e)
  );

  async function run() {
    const user = new User({
      name: "yunha",
      age: 25,
    });

    user.save().then(() => {
      console.log("user Saved");
    });
		console.log(user)
  }
	run();
});

app.listen(5000, () => {
  console.log("app listening on port http://localhost:5000/");
});
