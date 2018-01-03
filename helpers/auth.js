module.exports = {
  ensureAutheticated: function(req, res, next){
    if(req.isAuthenticated()){
      return next();
    }
    req.flash("error_msg", "Oops, não tem permissões");
    res.redirect('/users/login');
  }
}
