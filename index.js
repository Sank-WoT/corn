var express = require("express");
var app = express();
const mongoose = require('mongoose');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var cors = require('cors');
app.use(cors());
var Schema = mongoose.Schema;
var userScheme = new Schema({
	name: String,
	age: Number
}, {collection: 'dogs'});

var Dog = mongoose.model("dog", userScheme);
// для работы с promise
// определяем обработчик для маршрута "/"
app.use("/static", express.static(__dirname + "/src"));
app.get("/api", function(request, response){    
    // отправляем ответ
    response.send("<h2>Привет Sank!</h2>");
    mongoose.Promise = global.Promise;
	mongoose.connect('mongodb://localhost:27017/animals');

	var Dog = mongoose.model("dog", userScheme);
	var dog = new Dog({
	    name: "Lay",
	    age: 12
	});
	 
	dog.save(function(err){
	    mongoose.disconnect();  // отключение от базы данных
	     
	    if(err) return console.log(err);
	    console.log("Сохранен объект", dog);
	});
});

app.get("/api/get", function(request,response){
	mongoose.connect('mongodb://localhost:27017/animals');
	Dog.find({}, function(err, data) { response.send(data); });
})
app.get("/", function(request, response){
	// отправляем ответ
    response.send("<h2>Главная страница</h2>");
})

app.get("/api/dogs", function(request, response){   
	response.send({
		dogs: [{name: 'gav', age: '20'}]
	});
	console.log("dogs sent");
});

app.use(bodyParser.json());
app.route('/api/dogs').post((req, res) => {
	res.send(201, req.body);
});

// начинаем прослушивать подключения на 3000 порту
app.listen(3000);
console.log("server run");