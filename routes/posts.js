const express = require('express');
var router = express.Router();
var Post = require('../models/Post');
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f129dac201d23fd99f13b7c87dc2efdbafba4401
const {ensureAutheticated} = require('../helpers/auth');

router.use(express.static('public'));

router.get('/',  ensureAutheticated, (req, res)=>{
  Post.find({author: req.user.id})
  .sort({date:1})
<<<<<<< HEAD
=======
=======
router.use(express.static('public'));


router.get('/', (req, res)=>{
  Post.find({})
  .sort({date:'desc'})
>>>>>>> d16f10aed0cb4f374547cd0b2b63cc7eca6c7e44
>>>>>>> f129dac201d23fd99f13b7c87dc2efdbafba4401
  .then(posts => {
    res.render('./posts/posts', {
      title: 'Postagens | Blog Admin',
      layout: 'layouts/layout',
      state : 'autenticado',
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
      alert : [],
>>>>>>> d16f10aed0cb4f374547cd0b2b63cc7eca6c7e44
>>>>>>> f129dac201d23fd99f13b7c87dc2efdbafba4401
      posts: posts
    });
  })
});
// Add Post Form
<<<<<<< HEAD
router.get('/add', ensureAutheticated, (req, res) => {
=======
<<<<<<< HEAD
router.get('/add', ensureAutheticated, (req, res) => {
=======
router.get('/add', (req, res) => {
>>>>>>> d16f10aed0cb4f374547cd0b2b63cc7eca6c7e44
>>>>>>> f129dac201d23fd99f13b7c87dc2efdbafba4401
  res.render('./posts/addpost', {
    title: 'Adicionar Postagem | Blog Admin',
    layout: 'layouts/layout',
    state : 'autenticado',
    errors : [],
    postTitle: [],
    postCategory: [],
    postBody: []
  })
});


<<<<<<< HEAD
router.get('/details/:idPost', ensureAutheticated, (req, res)=>{
=======
<<<<<<< HEAD
router.get('/details/:idPost', ensureAutheticated, (req, res)=>{
=======
router.get('/details/:idPost', (req, res)=>{
>>>>>>> d16f10aed0cb4f374547cd0b2b63cc7eca6c7e44
>>>>>>> f129dac201d23fd99f13b7c87dc2efdbafba4401
  Post.findOne({
    _id: req.params.idPost
  })
  .then(post =>{
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f129dac201d23fd99f13b7c87dc2efdbafba4401
      if(post.author != req.user.id){
        req.flash('error_msg', 'Oops, não estás autorizado');
        res.redirect('/posts');
      }else{

        res.render('./posts/details', {
        title: 'Detalhes de '+post.title+'| Blog Admin',
        layout: 'layouts/layout',
        state : 'autenticado',
        post : post
        })
}
<<<<<<< HEAD
=======
=======
    res.render('./posts/details', {
      title: 'Detalhes de '+post.title+'| Blog Admin',
      layout: 'layouts/layout',
      state : 'autenticado',
      post : post
    })
>>>>>>> d16f10aed0cb4f374547cd0b2b63cc7eca6c7e44
>>>>>>> f129dac201d23fd99f13b7c87dc2efdbafba4401
  })
});


<<<<<<< HEAD
router.post('/add', ensureAutheticated, (req,res)=>{
=======
<<<<<<< HEAD
router.post('/add', ensureAutheticated, (req,res)=>{
=======
router.post('/post', (req,res)=>{
  console.log(req.body)
>>>>>>> d16f10aed0cb4f374547cd0b2b63cc7eca6c7e44
>>>>>>> f129dac201d23fd99f13b7c87dc2efdbafba4401
  let errors = [];
  if(!req.body.title){
    errors.push({text: "Insira o título da postagem"})
  }
  if(!req.body.category){
    errors.push({text: "Associe uma categoria à sua postagem"})
  }
  if(!req.body.textarea){
    errors.push({text: "Insira algum conteúdo à postagem"})
  }
  if(errors.length > 0){
    var locals = {
      title: 'Adicionar Postagem | Blog Admin',
      layout: 'layouts/layout',
      state : 'autenticado',
      errors: errors,
      postTitle: req.body.title,
      postCategory: req.body.category,
      postBody: req.body.textarea
    };
    res.render('./posts/addpost', locals);
  } else {
    const User = {}
    new Post();
    const newUser = {
    title: 'Postagens | Blog Admin',
    layout: 'layouts/layout',
    state : 'autenticado',
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f129dac201d23fd99f13b7c87dc2efdbafba4401
    title : req.body.title,
    category: req.body.category,
    body: req.body.textarea,
    author: req.user.id
  };
  new Post(newUser)
  .save()
  .then(post => {
    req.flash('success_msg', 'Postagem adicionada com sucesso');
    res.redirect('/posts');
  })
}
});

//delete post process
router.delete('/details/:idPost', ensureAutheticated, (req,res) =>{
  Post.remove({_id: req.params.idPost})
  .then(() => {
    req.flash('success_msg', 'Postagem eliminada com suceso');
    res.redirect('/posts');
  });
})

//Edit Form Process
router.put('/details/:idPost',  ensureAutheticated, (req,res)=>{
  Post.findOne({_id: req.params.idPost
  })
  .then(post=> {
    // console.log(req.body);
    //new values
    post.title = req.body.title;
    post.category = req.body.category;
    post.body = req.body.textarea;
    post.author = 'Teste editado';
    post.save().then(post => {
      req.flash('success_msg', 'Postagem editada com sucesso');
      res.redirect('/posts')});
    });
  });

  module.exports = router;
<<<<<<< HEAD
=======
=======
    alert : 'Post adicionado com sucesso',
    title : req.body.title,
    category: req.body.category,
    body: req.body.textarea,
    author: 'Teste'
    };
    new Post(newUser)
    .save()
    .then(post => {
      res.redirect('/posts');
    })
  }
});

module.exports = router;
>>>>>>> d16f10aed0cb4f374547cd0b2b63cc7eca6c7e44
>>>>>>> f129dac201d23fd99f13b7c87dc2efdbafba4401
