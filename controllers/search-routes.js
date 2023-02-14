// this will contain GET and SAVE options
const router = require('express').Router();
const { Car} = require('../models');
const withAuth = require('../utils/Auth'); //makes user sign back in if session is expired

// router.get('/', withAuth, async (req, res) => {
//   res.render('profile')
// })

router.get('/profile', async (req, res) => {
  const userId = req.session.user_id;
  const user = await User.findOne({
      where: { id: userId },
      attributes: { exclude: ['password']}
  });
  const userData = user.get({ plain: true });
console.log(userData);

  res.render('profile', {
      ...userData,
      logged_in: req.session.logged_in,
  }
);
});

module.exports = router;
