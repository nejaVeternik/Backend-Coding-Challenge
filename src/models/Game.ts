import { Table, Model, Column, DataType } from "sequelize-typescript";
import { sequelize } from "../db.js";

@Table({
    timestamps: false,
    tableName: 'games'
})

export class Game extends Model {
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        allowNull: false,
        primaryKey: true
    })
    uuid!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    title!: string;

    @Column({
        type: DataType.TEXT
    })
    description!: string;
}



/*class Game extends Model {}

Game.init({
    UUID: {
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataType.STRING,
        allowNull: false
    },
    description: {
        type: DataType.TEXT
    }
}, {
    sequelize, 
    modelName: 'Game',
    timestamps: false
})

export { Game };*/