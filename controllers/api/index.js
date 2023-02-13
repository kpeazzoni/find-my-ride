const router = require('express').Router();
const user = require('./user');
const carRoutes = require('./car')


router.use('/users', user);
router.use('/car', carRoutes)

module.exports = router;