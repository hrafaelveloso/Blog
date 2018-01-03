<<<<<<< HEAD
/*jshint esversion: 6 */
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
=======
const express = require('express');
const bodyParser = require('body-parser');
<<<<<<< HEAD
const methodOverride = require('method-override');
=======
>>>>>>> d16f10aed0cb4f374547cd0b2b63cc7eca6c7e44
>>>>>>> f129dac201d23fd99f13b7c87dc2efdbafba4401
const cors = require('cors');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const ejs = require('ejs');
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f129dac201d23fd99f13b7c87dc2efdbafba4401
const flash = require('connect-flash');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');

const app = express();

//Load routes
const posts = require('./routes/posts');
const others = require('./routes/main');
const users = require('./routes/users');

//Passport Config
require('./config/passport')(passport);
<<<<<<< HEAD

//DB Config
const db = require('./config/database');
=======
//DB Config
const db = require('./config/database');
=======

var posts = require('./routes/posts');
var others = require('./routes/main');

const app = express();

>>>>>>> d16f10aed0cb4f374547cd0b2b63cc7eca6c7e44
>>>>>>> f129dac201d23fd99f13b7c87dc2efdbafba4401

//Base Dados
mongoose.Promise = global.Promise; //Map global promise - get rid of warning
//connect to mongoose
<<<<<<< HEAD
mongoose.connect(db.mongoURI, {
    useMongoClient: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

//MIDDLEWARE
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({
  extended: true,
})); //parse application/x-www-form-urlencoded
app.use(bodyParser.json()); //parse apllication/json
=======
<<<<<<< HEAD
  mongoose.connect(db.mongoURI, {useMongoClient: true})
    .then(()=> console.log('MongoDB Connected'))
    .catch(err => console.log(err));
=======
  mongoose.connect('mongodb://localhost/blog-dev', {useMongoClient: true})
    .then(()=> console.log('MongoDB Connected'))
    .catch(err => console.log(err));
const port = 3334;
>>>>>>> d16f10aed0cb4f374547cd0b2b63cc7eca6c7e44

//MIDDLEWARE
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({extended:true}));//parse application/x-www-form-urlencoded
app.use(bodyParser.json()); //parse apllication/json
<<<<<<< HEAD
>>>>>>> f129dac201d23fd99f13b7c87dc2efdbafba4401
app.use(methodOverride('_method')); //Method override middleware

// express session middleware
app.use(cookieParser('cat'));
app.use(session({
  secret: 'cat',
  resave: true,
  saveUninitialized: true,
<<<<<<< HEAD
  cookie: {
    maxAge: 60000,
  },
=======
  cookie: { maxAge: 60000 }
>>>>>>> f129dac201d23fd99f13b7c87dc2efdbafba4401
}));

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

//Global Variables
<<<<<<< HEAD
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;

  // console.log("res.locals.error app.js");
  // console.log(res.locals);
  next();
});

app.use(cors());

=======
app.use(function(req,res,next){
res.locals.success_msg = req.flash('success_msg');
res.locals.error_msg = req.flash('error_msg');
res.locals.error = req.flash('error');
res.locals.user = req.user || null;
// console.log("res.locals.error app.js");
// console.log(res.locals);
next();
});

=======
>>>>>>> d16f10aed0cb4f374547cd0b2b63cc7eca6c7e44
app.use(cors());
>>>>>>> f129dac201d23fd99f13b7c87dc2efdbafba4401
// view engine setup
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use('/', others);
app.use('/posts', posts);
app.use('/posts/details', posts);
<<<<<<< HEAD
app.use('/users', users);
app.use('/users/login', users);

// uncomment after placing your favicon in /public
//TODO: favicon
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

const port = process.env.PORT || 3334; //heroku port

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
module.exports = app;
=======
<<<<<<< HEAD
app.use('/users', users);
app.use('/users/login', users);
=======
>>>>>>> d16f10aed0cb4f374547cd0b2b63cc7eca6c7e44


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

<<<<<<< HEAD
const port = process.env.PORT || 3334; //heroku port
=======
module.exports = app;
>>>>>>> d16f10aed0cb4f374547cd0b2b63cc7eca6c7e44

app.listen(port, () =>{
  console.log(`Server started on port ${port}`);
});
<<<<<<< HEAD
module.exports = app;
=======
>>>>>>> d16f10aed0cb4f374547cd0b2b63cc7eca6c7e44
>>>>>>> f129dac201d23fd99f13b7c87dc2efdbafba4401
