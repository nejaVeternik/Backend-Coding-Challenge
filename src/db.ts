import { Sequelize } from 'sequelize-typescript';
import { Game } from './models/Game.js';

export const sequelize = new Sequelize({
    database: 'casino',
    dialect: 'sqlite',
    username: 'username',
    password: 'pwd',
    host: './casino.sqlite',
    models: [Game]
});


