const router = require('express').Router();
const { User} = require('../../models');
// const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
      const userData = await User.create(req.body);
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  
  module.exports = router;
// const router = require('express').Router();
// const { User } = require('../../models');

// router.post('/', async (req, res) => {
//   try {
//     const newUser = await User.create({
//       name: req.body.name,
//       password: req.body.password,
//       email: req.body.email
//     });

//     req.session.save(() => {
//       req.session.userId = newUser.id;
//       req.session.username = newUser.name;
//       req.session.loggedIn = true;

//       res.json(newUser);
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.post('/login', async (req, res) => {
//   try {
//     const userData = await User.findOne({ where: { email: req.body.email } });

//     if (!userData) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password, please try again' });
//       return;
//     }

//     const validPassword = await userData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password, please try again' });
//       return;
//     }

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;
      
//       res.json({ user: userData, message: 'You are now logged in!' });
//     });

//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.post('/logout', (req, res) => {
//   if (req.session.logged_in) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });

// module.exports = User;
