const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3333;


//EJS middleware permite campos flat, estruturas
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

//How middleware works
app.use(function(req,res,next){
  // console.log(Date.now());
  req.name = 'Fernando Guimarães';
  next();
});

//Routes
app.get('/', (req, res)=>{
  console.log(req.name);
  res.render('index');
});

app.get('/index', (req, res)=>{
  console.log(req.name);
  res.render('index');
});

app.get('/posts', (req, res)=>{
  res.render('posts');
});

app.get('/login', (req, res)=>{
  res.render('login');
});

app.get('/categories', (req, res)=>{
  res.render('categories');
});

app.get('/details', (req, res)=>{
  res.render('details');
});

app.get('/profile', (req, res)=>{
  res.render('profile');
});

app.get('/settings', (req, res)=>{
  res.render('settings');
});

app.get('/users', (req, res)=>{
  res.render('users');
});


app.listen(port, () =>{
  console.log(`Server started on port ${port}`);
});
