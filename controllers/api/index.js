const router = require('express').Router();
const user = require('./user');
const profileRoutes = require('./profile')


router.use('/users', user);
router.use('/profile', profileRoutes)

module.exports = router;