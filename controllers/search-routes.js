// this will contain GET and SAVE options
const router = require('express').Router();
const { Car} = require('../models');
const withAuth = require('../utils/Auth'); //makes user sign back in if session is expired

router.get('/', withAuth, async (req, res) => {
  res.render('profile')
})

module.exports = router;