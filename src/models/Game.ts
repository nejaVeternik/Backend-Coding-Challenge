import { Table, Model, Column, DataType, BelongsToMany, Scopes } from "sequelize-typescript";
import { sequelize } from "../db.js";
import { Player } from "./Player.js";
import { GamePlayer } from "./GamePlayer.js";
import { PassThrough } from "stream";

@Scopes(() => ({
    players: {
        include: [{
            model: Player,
            through: {attributes: []}
        }]
    }
}))

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
        allowNull: false,
        unique: true
    })
    title!: string;

    @Column({
        type: DataType.TEXT
    })
    description!: string;

    @BelongsToMany(() => Player, () => GamePlayer)
    players?: Player[];
}