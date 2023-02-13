// this needs to have the res.render('login') in an if else statement - if they have a login - displaoy res.render('login')
// else- display  res.render('signup')
const router = require('express').Router();
const { User, Car } = require('../models');
const withAuth = require('../utils/Auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const userId = req.session.user_id;
        const user = await User.findOne({
            where: { id: userId },
            attributes: { exclude: ['password'] }
        });

        res.render('profile', {
            user,
            logged_in: req.session.logged_in,
        }
        );

    } catch (err) {
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

router.get('/profile', withAuth, async (req, res) => {
    const userId = req.session.user_id;
    const user = await User.findOne({
        where: { id: userId },
        attributes: { exclude: ['password'] }
    });
    const userData = user.get({ plain: true });
    console.log(userData);

    res.render('profile', {
        ...userData,
        logged_in: req.session.logged_in,
    }
    );
});
router.get('/saved', withAuth, async (req, res) => {
    const userId = req.session.user_id;
    const user = await Car.findAll({
        where: { user_id: userId },
    });
    const carData = user.map(car => car.get({ plain: true }));
    console.log(carData);

    res.render('saved', {
        carData,
        logged_in: req.session.logged_in,
    }
    );
});


// make a call to the database finding the user that is logged in, all their saved cars. 

module.exports = router;