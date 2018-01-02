const express = require('express');
var router = express.Router();
var Post = require('../models/Post');

//Routes
//É necessário filtrar a autenticação do user, se estiver autenticado deve ir para /index, senão página do login
router.get('/', (req, res)=>{
  Post.find({})
    .sort({date:'desc'})
    .then(posts => {
    res.render('index', {
      title: 'Início | Blog Admin',
      layout: 'layouts/layout',
      state : 'autenticado',
      posts: posts
      })
    })
});

router.get('/index', (req, res)=>{
  Post.find({})
    .sort({date:'desc'})
    .then(posts => {
    res.render('index', {
      title: 'Início | Blog Admin',
      layout: 'layouts/layout',
      state : 'autenticado',
      posts: posts
      })
    })
});


router.get('/login', (req, res)=>{
  var locals = {
   title: 'Iniciar Sessão | Blog Admin',
   layout: 'layouts/layout',
   state : 'null'
 };
  res.render('login', locals);
});

router.get('/categories', (req, res)=>{
  var locals = {
  title: 'Home | Blog Admin',
  layout: 'layouts/layout',
  state : 'autenticado'
};
  res.render('./categories/categories', locals);
});

router.get('/profile', (req, res)=>{
  var locals = {
  title: 'Área Pessoal | Blog Admin',
  layout: 'layouts/layout',
  state : 'autenticado'
};
  res.render('profile', locals);
});

router.get('/settings', (req, res)=>{
  var locals = {
  title: 'Configurações | Blog Admin',
  layout: 'layouts/layout',
  state : 'autenticado'
};
  res.render('settings', locals);
});

router.get('/users', (req, res)=>{
  var locals = {
  title: 'Utilizadores | Blog Admin',
  layout: 'layouts/layout',
  state : 'autenticado'
};
  res.render('./users/users', locals);
});

module.exports = router;
