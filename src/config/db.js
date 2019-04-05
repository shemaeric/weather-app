import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const connect = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASS, {
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
})

export default connect;