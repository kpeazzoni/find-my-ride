const { User } = require('../models');

const user =
[
    {
    
      "name": "Karen",
      "email": "karen@me.com",
      "password": "password123"
    },
    {
        "name": "jeff",
        "email": "jeff@me.com",
        "password": "password123"
    },
    {
        "name": "jacob",
        "email": "jacob@me.com",
        "password": "password123"
    },
    {
        "name": "bennett",
        "email": "bennett@me.com",
        "password": "password123"
    }
];

const seedUsers = () => User.bulkCreate(user);

module.exports = seedUsers;