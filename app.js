const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const ejs = require('ejs');

var posts = require('./routes/posts');
var others = require('./routes/main');

const app = express();


//Base Dados
mongoose.Promise = global.Promise; //Map global promise - get rid of warning
//connect to mongoose
  mongoose.connect('mongodb://localhost/blog-dev', {useMongoClient: true})
    .then(()=> console.log('MongoDB Connected'))
    .catch(err => console.log(err));
const port = 3334;

//MIDDLEWARE
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({extended:true}));//parse application/x-www-form-urlencoded
app.use(bodyParser.json()); //parse apllication/json
app.use(cors());
// view engine setup
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use('/', others);
app.use('/posts', posts);
app.use('/posts/details', posts);


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

module.exports = app;

app.listen(port, () =>{
  console.log(`Server started on port ${port}`);
});
