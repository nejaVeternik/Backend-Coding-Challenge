import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

export class Game extends Model {}

Game.init({
    UUID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
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
    modelName: 'Game',
    timestamps: false
})
