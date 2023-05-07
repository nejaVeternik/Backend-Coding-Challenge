import sqlite3 from "sqlite3";
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('casino', 'user', 'pwd', {
    dialect: 'sqlite',
    host: './casino.sqlite'
})

