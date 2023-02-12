const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      console.log('user not logged in...');
      res.render('login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  