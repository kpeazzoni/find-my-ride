const sequelize = require('../config/connection');
const { User } = require('../models');
const userSeeds = require('./user-seeds');
const carSeeds = require('../seeds/car-seeds')

// const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
 

 const users =  await User.bulkCreate(userSeeds, carSeeds, {
    individualHooks: true,
    returning: true,
  });
console.log(users)
  process.exit(0);
};

seedDatabase();