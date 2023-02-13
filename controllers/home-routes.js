// this needs to have the res.render('login') in an if else statement - if they have a login - displaoy res.render('login')
// else- display  res.render('signup')
const router = require('express').Router();
const { User} = require('../models');
const withAuth = require('../utils/Auth');

router.get('/', withAuth, async (req, res) => {
    try{
        const userId = req.session.user_id;
        const user = await User.findOne({
            where: { id: userId },
            attributes: { exclude: ['password']}
        });

        res.render('profile', {
            user,
            logged_in: req.session.logged_in,
        }
    );
        
    }catch (err) {
        res.status(500).json(err);
    }
});

// router.get('/login', (req, res) => {
    
//     if (req.session.logged_in) {
//         res.render('/');
//     }
//     else {
//         res.render('login');
//     }
// });

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
        savedData: {make: "BENZ", model: "C43", year: "2022"},
        logged_in: req.session.logged_in,
    }
);
});

module.exports = router;