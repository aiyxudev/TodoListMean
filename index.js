var express = require('express'),
    app = express(),
    port = 3000,
    bodyParser = require('body-parser'); // for create route

var todoRoutes = require("./routes/todos")

// to use body parser module
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// to use index.html
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res){
  //index.html
  res.sendFile("index.html");
});


//use /api/todos as todoRoutes
app.use('/api/todos', todoRoutes);


app.listen(port, function(){
  console.log("App is running on 3000");
});
