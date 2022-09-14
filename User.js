//이 코드는 User.js모듈임

//mongoose 모듈을 통한 mongoDB연결
const mongoose = require("mongoose");
const {Schema} = mongoose;

//user스키마 생성
const userSchema = new Schema({
  name: String,
  age: Number,
  class: String
});

// 모듈 내보내기,  mongoose.model("db에 저장될 collection이름", 생성한 스키마변수 이름)
module.exports = mongoose.model("a", userSchema);
