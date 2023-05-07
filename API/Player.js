import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

export class Player extends Model {}

Player.init({
    UUID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstName: {
        type: DataTypes.TEXT,
        allowNull: false
    }
    ,
    lastName: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    balance: {
        type: DataTypes.FLOAT,
        defaultValue: 0
    }
}, {
    sequelize, 
    modelName: 'Player',
    timestamps: false
})