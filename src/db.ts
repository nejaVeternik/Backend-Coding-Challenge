import { Sequelize } from 'sequelize-typescript';
import { Game } from './models/Game.js';
import { Player } from './models/Player.js';
import { GamePlayer } from './models/GamePlayer.js';

export const sequelize = new Sequelize({
    database: 'casino',
    dialect: 'sqlite',
    username: 'username',
    password: 'pwd',
    host: './casino.sqlite',
    models: [Game, Player, GamePlayer]
});



