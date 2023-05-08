import { Table, Model, Column, DataType } from "sequelize-typescript";
import { sequelize } from "../db.js";

@Table({
    timestamps: false,
    tableName: 'games'
})

export class Game extends Model<Game> {
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