// this will be the start of models for route
const User = require('./User')
const Car = require('./Car')

User.belongsTo(Car, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
}),

User.hasMany(Car, {
    foreignKey: 'user_id'
}),

Car.belongsTo(User, {
    foreignKey: 'user_id'
}),

Car.hasMany(User, {
    foreignKey: 'user_id'
}),


module.exports = { User, Car }