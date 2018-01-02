const express = require('express');
var router = express.Router();
var Post = require('../models/Post');
router.use(express.static('public'));


router.get('/', (req, res)=>{
  Post.find({})
  .sort({date:'desc'})
  .then(posts => {
    res.render('./posts/posts', {
      title: 'Postagens | Blog Admin',
      layout: 'layouts/layout',
      state : 'autenticado',
      alert : [],
      posts: posts
    });
  })
});
// Add Post Form
router.get('/add', (req, res) => {
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


router.get('/details/:idPost', (req, res)=>{
  Post.findOne({
    _id: req.params.idPost
  })
  .then(post =>{
    res.render('./posts/details', {
      title: 'Detalhes de '+post.title+'| Blog Admin',
      layout: 'layouts/layout',
      state : 'autenticado',
      post : post
    })
  })
});


router.post('/post', (req,res)=>{
  console.log(req.body)
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
