import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('farmacia_comercial_2026', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

export default sequelize;