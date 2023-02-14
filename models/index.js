
const User = require('./User')
const Car = require('./Car')


Car.belongsTo(User, {
    foreignKey: 'user_id'
}),

module.exports = { User, Car }