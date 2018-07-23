var express = require("express");
var app = express();
var uniqid = require('uniqid');
const mongoose = require('mongoose');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var cors = require('cors');
app.use(cors());
var Schema = mongoose.Schema;
var respondentScheme = new Schema({
	id: String,
	region: String,
	settlemen: String,
	organization: String,
	sex: String,
	height: Number,
	width: Number
}, {collection: 'respondent'});

var effectScheme = new Schema({
	effect: Number,
	oNeg: Number,
	oPos: Number,
	sNeg: Number,
	sPos: Number,
	valuePreparation: Number,
	valueNoPreparation: Number,
	id: String
}, {collection: 'effect'});

var preparationScheme = new Schema({
	MNN: String,
	komerceName: String,
	valueApplicationPreparation: Number,
	dose: Number,
	maxValueApplicationPreparation: Number,
	maxDose: Number,
	price: Number,
	valueInDose: Number,
	valueInDoseDay: Number,
	valueDoseInPack: Number,
	id: String
}, {collection: 'preparation'});

var interventionScheme = new Schema({
	nameIntervention: String,
	kommerceNameIntervention: String,
	valueIntervention: Number,
	refereceValueIntervention: Number,
	price: Number,
	priceReference: Number,
	id: String
}, {collection: 'intervention'});

var resultScheme = new Schema({
	baseRationality: Number,
	rationality: Number,
	advantage: Number,
	id: String
}, {collection: 'result'});

// для работы с promise
// определяем обработчик для маршрута "/"
app.use("/static", express.static(__dirname + "/src"));
var urlencodedParser = bodyParser.urlencoded({extended: false});
var jsonParser = bodyParser.json()
var id = uniqid();  

app.post("/api/result", jsonParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    var result = mongoose.model('result', resultScheme);

	result.collection.insert(request.body, onInsert);

	function onInsert(err, docs) {
	    if (err) {
	        // TODO: handle error
	    } else {
	        console.info('%d intervention were successfully stored.', docs.length);
	    }
	}
    console.log(request.body);
});

app.post("/apit", jsonParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    mongoose.Promise = global.Promise;
	mongoose.connect('mongodb://localhost:27017/cor');
	var Respondent = mongoose.model("respondent", respondentScheme);
	var respondent = new Respondent({
	    id: id,
	    region: request.body.region,
	    settlemen: request.body.settlemen,
	    organization: request.body.organization,
	    sex: request.body.sex,
	    height: request.body.height,
	    width: request.body.width
	});
	respondent.save(function(err){
	    mongoose.disconnect();  // отключение от базы данных
	     
	    if(err) return console.log(err);
	    console.log("Сохранен объект", respondent);
	});
    console.log(request.body);;
});

app.post("/api/effect", jsonParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    mongoose.Promise = global.Promise;
	mongoose.connect('mongodb://localhost:27017/cor');
	var Effect = mongoose.model("effect", effectScheme);
	var effect = new Effect({
		effect: request.body.effect,
		oNeg: request.body.oNeg,
		oPos: request.body.oPos,
		sNeg: request.body.sNeg,
		sPos: request.body.sPos,
		valuePreparation: request.body.valuePreparation,
		valueNoPreparation: request.body.valueNoPreparation,
	    id: id
	});
	effect.save(function(err){
	    mongoose.disconnect();  // отключение от базы данных
	     
	    if(err) return console.log(err);
	    console.log("Сохранен объект", effect);
	});
    console.log(request.body);;
});

app.post("/api/preparation", jsonParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    var preparation = mongoose.model('preparation', preparationScheme);

	preparation.collection.insert(request.body, onInsert);

	function onInsert(err, docs) {
	    if (err) {
	        // TODO: handle error
	    } else {
	        console.info('%d preparation were successfully stored.', docs.length);
	    }
	}
    console.log(request.body);
});

app.post("/api/intervention", jsonParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    var intervention = mongoose.model('intervention', interventionScheme);

	intervention.collection.insert(request.body, onInsert);

	function onInsert(err, docs) {
	    if (err) {
	        // TODO: handle error
	    } else {
	        console.info('%d intervention were successfully stored.', docs.length);
	    }
	}
    console.log(request.body);
});

app.get("/api", function(req, res) {
    // отправляем ответ
    console.log(req.body);
    response.send("<h2>Привет Sank!</h2>");
    /*mongoose.Promise = global.Promise;
	mongoose.connect('mongodb://localhost:27017/cor');

	var Respondent = mongoose.model("respondent", userScheme);
	var respondent = new Respondent({
	    id: id,
	    region: "Omsk",
	    settlemen: "Omsk",
	    organization: "Sibadi",
	    sex: "Male",
	    height: "180",
	    width: "70"
	});
	 
	respondent.save(function(err){
	    mongoose.disconnect();  // отключение от базы данных
	     
	    if(err) return console.log(err);
	    console.log("Сохранен объект", respondent);
	}); */
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