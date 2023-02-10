const sequelize = require('../config/connection');
const { User } = require('../models');
const userSeeds = require('./user-seeds')

const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
 

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};
userSeeds();
seedDatabase();