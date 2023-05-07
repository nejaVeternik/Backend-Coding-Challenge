//import { sequelize } from '../../db.js';
import { Model, DataTypes } from 'sequelize';

//const { Model } = require('sequelize');

import { sequelize } from '../db.js';

export class Game extends Model {}

Game.init({
    UUID: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    }
}, {
    sequelize, 
    modelName: 'Game'
})
