// this will be the start of models for route
const User = require('./User')
const Car = require('./Car')

// User.hasMany(Car, {
//     foreignKey: 'user_id'
// }),

// Car.belongsTo(User, {
//     foreignKey: 'user_id'
// }),



module.exports = { User, Car }