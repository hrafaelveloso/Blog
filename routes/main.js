<<<<<<< HEAD
/*jshint esversion: 6 */
const express = require('express');
var router = express.Router();
var Post = require('../models/Post');
const {
  ensureAutheticated,
} = require('../helpers/auth');

//Routes
router.get('/', ensureAutheticated, (req, res) => {
  Post.find({
      author: req.user.id,
    })
    .sort({
      date: 'desc',
    })
    .then(posts => {
      res.render('index', {
        title: 'Início | Blog Admin',
        layout: 'layouts/layout',
        state: 'autenticado',
        posts: posts,
      });
    });
});

router.get('/index', ensureAutheticated, (req, res) => {
  Post.find({
      author: req.user.id,
    })
    .sort({
      date: 1,
    })
    .then(posts => {
      res.render('index', {
        title: 'Início | Blog Admin',
        layout: 'layouts/layout',
        state: 'autenticado',
        posts: posts,
      });
    });
});

router.get('/categories', ensureAutheticated, (req, res) => {
  var locals = {
    title: 'Home | Blog Admin',
    layout: 'layouts/layout',
    state: 'autenticado',
  };
  res.render('./categories/categories', locals);
});

router.get('/profile', ensureAutheticated, (req, res) => {
  var locals = {
    title: 'Área Pessoal | Blog Admin',
    layout: 'layouts/layout',
    state: 'autenticado',
  };
  res.render('profile', locals);
});

router.get('/settings', ensureAutheticated, (req, res) => {
  var locals = {
    title: 'Configurações | Blog Admin',
    layout: 'layouts/layout',
    state: 'autenticado',
  };
  res.render('settings', locals);
});

=======
const express = require('express');
var router = express.Router();
var Post = require('../models/Post');
<<<<<<< HEAD
const {ensureAutheticated} = require('../helpers/auth');

//Routes
//É necessário filtrar a autenticação do user, se estiver autenticado deve ir para /index, senão página do login
router.get('/', ensureAutheticated, (req, res)=>{
  Post.find({author: req.user.id})
=======

//Routes
//É necessário filtrar a autenticação do user, se estiver autenticado deve ir para /index, senão página do login
router.get('/', (req, res)=>{
  Post.find({})
>>>>>>> d16f10aed0cb4f374547cd0b2b63cc7eca6c7e44
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

<<<<<<< HEAD
router.get('/index', ensureAutheticated, (req, res)=>{
  Post.find({author: req.user.id})
    .sort({date:1})
=======
router.get('/index', (req, res)=>{
  Post.find({})
    .sort({date:'desc'})
>>>>>>> d16f10aed0cb4f374547cd0b2b63cc7eca6c7e44
    .then(posts => {
    res.render('index', {
      title: 'Início | Blog Admin',
      layout: 'layouts/layout',
      state : 'autenticado',
      posts: posts
      })
    })
});

<<<<<<< HEAD
router.get('/categories', ensureAutheticated, (req, res)=>{
=======

router.get('/login', (req, res)=>{
  var locals = {
   title: 'Iniciar Sessão | Blog Admin',
   layout: 'layouts/layout',
   state : 'null'
 };
  res.render('login', locals);
});

router.get('/categories', (req, res)=>{
>>>>>>> d16f10aed0cb4f374547cd0b2b63cc7eca6c7e44
  var locals = {
  title: 'Home | Blog Admin',
  layout: 'layouts/layout',
  state : 'autenticado'
};
  res.render('./categories/categories', locals);
});

<<<<<<< HEAD
router.get('/profile', ensureAutheticated, (req, res)=>{
=======
router.get('/profile', (req, res)=>{
>>>>>>> d16f10aed0cb4f374547cd0b2b63cc7eca6c7e44
  var locals = {
  title: 'Área Pessoal | Blog Admin',
  layout: 'layouts/layout',
  state : 'autenticado'
};
  res.render('profile', locals);
});

<<<<<<< HEAD
router.get('/settings', ensureAutheticated, (req, res)=>{
=======
router.get('/settings', (req, res)=>{
>>>>>>> d16f10aed0cb4f374547cd0b2b63cc7eca6c7e44
  var locals = {
  title: 'Configurações | Blog Admin',
  layout: 'layouts/layout',
  state : 'autenticado'
};
  res.render('settings', locals);
});

<<<<<<< HEAD
=======
router.get('/users', (req, res)=>{
  var locals = {
  title: 'Utilizadores | Blog Admin',
  layout: 'layouts/layout',
  state : 'autenticado'
};
  res.render('./users/users', locals);
});

>>>>>>> d16f10aed0cb4f374547cd0b2b63cc7eca6c7e44
>>>>>>> f129dac201d23fd99f13b7c87dc2efdbafba4401
module.exports = router;
