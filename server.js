const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./User");

//mongoDB 연결
mongoose.connect(
  "mongodb://localhost:27017/testdb",
  () => {
    console.log("connected");
  },
  (e) => console.error(e)
);

app.use(cors());

app.get("/", (req, res) => {
  

  async function run() {

    // db에 저장하는 코드

    const user = new User({
      name: "hansol",
      age: 25,
      class: "sweduu"
    });
    //user data를 db에 저장
    await user.save().then(() => {
      console.log("user Saved");
    });
    console.log(user);

    //db에서 데이터 뽑아오는 코드
    const age24th = await User.find({age:24});
    const age25th = await User.find({age:25});
    age24th.push(age25th);
    res.send(age24th);
  }
  run();

  
});

app.listen(5000, () => {
  console.log("app listening on port http://localhost:5000/");
});
