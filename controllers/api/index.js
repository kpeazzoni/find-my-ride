const router = require('express').Router();
const user = require('./user');
const search = require('./search');

router.use('/users', user);
router.use('/search', search);

module.exports = router;