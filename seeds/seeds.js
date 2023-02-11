const sequelize = require('../config/connection');
const { User } = require('../models');
const userSeeds = require('./user-seeds')

// const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
 

 const users =  await User.bulkCreate(userSeeds, {
    individualHooks: true,
    returning: true,
  });
console.log(users)
  process.exit(0);
};

seedDatabase();