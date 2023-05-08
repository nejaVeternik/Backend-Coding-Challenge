import { Table, Model, Column, DataType, ForeignKey} from "sequelize-typescript";
import { Player } from "./Player.js";
import { Game } from "./Game.js";

@Table({
    timestamps: false,
    tableName: 'gamePlayer'
})

export class GamePlayer extends Model<GamePlayer> {
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        allowNull: false,
        primaryKey: true
    })
    uuid!: string;

    @ForeignKey(() => Player)
    @Column
    playerUuid!: string;

    @ForeignKey(() => Game)
    @Column
    gameUuid!: string;

}