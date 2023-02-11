// this needs to have the res.render('login') in an if else statement - if they have a login - displaoy res.render('login')
// else- display  res.render('signup')
const router = require('express').Router();
const { User} = require('../models');
const withAuth = require('../utils/Auth');

router.get('/', withAuth, async (req, res) => {
    try{
        const userData = await User.findAll({
            attributes: { exclude: ['password']},
            order: [['name',]]
        });

        const user = userData.map((data) =>
        data.get({ plain: true})
        );

        res.render('homepage', {
            user,
            logged_in: req.session.logged_in,
        }
        
        );
        
    }catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
    
});

module.exports = router;