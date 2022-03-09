const checkAuth = (req, res, next) => {
  if (req.session.user) {
    return next();
  }
  res.redirect('/user/signin');
};

module.exports = {checkAuth}
