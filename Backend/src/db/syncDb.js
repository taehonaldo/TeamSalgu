const models = require('./models/index');

module.exports = () =>{
    return models.sequelize.sync({force: false});
}