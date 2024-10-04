module.exports = (sequelize, Sequelize) => {
    const Concensionary = sequelize.define("car", {
        brand: {
            type: Sequelize.STRING
        },
        model: {
            type: Sequelize.STRING
        },
        power: {
            type: Sequelize.STRING
        }
    });

    return Concensionary;
}