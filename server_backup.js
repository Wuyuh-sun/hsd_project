const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser  = require('body-parser');
const mongoose    = require('mongoose');
const port = process.env.PORT || 5000;
var fs = require('fs');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//인덱스 페이지
app.get('/', function(request, response) { 	
	fs.readFile('index.html', function (error, data) {
		response.writeHead(200, { 'Content-Type': 'text/html' });
		response.end(data);
		console.log('메인페이지');
    });	
});

//===== 데이터베이스 연결 =====//

var MongoClient = require('mongodb').MongoClient;

//데이터베이스 객체를 위한 변수 선언
var database;

//데이터베이스에 연결
function connectDB() {
	
	var databaseUrl = 'mongodb://localhost:27017/test';
	
	MongoClient.connect(databaseUrl, function(err, db) {
		if (err) throw err;
		
		console.log('데이터베이스에 연결되었습니다. : ' + databaseUrl);
		
		// database 변수에 할당
		database = db;
		
		//database.collection is not a function 오류나서 추가해봄
		database = db.db('DB');

	});
}

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/`);
  connectDB();
})