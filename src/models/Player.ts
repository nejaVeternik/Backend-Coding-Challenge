import { Table, Model, Column, DataType, Scopes, BelongsToMany } from "sequelize-typescript";
import { Game } from "./Game.js";
import { GamePlayer } from "./GamePlayer.js";
import { validate } from "uuid";


@Scopes(() => ({
    games: {
        include: [{
            model: Game,
            through: {attributes: []}
        }]
    }
}))

@Table({
    timestamps: false,
    tableName: 'players'
})

export class Player extends Model<Player> {
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
        unique: true,
        validate: {isAlphanumeric: true}
    })
    username!: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false
    })
    firstName!: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false
    })
    lastName!: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
        unique: true,
        validate: {isEmail: true}
    })
    email!: string;

    @Column({
        type: DataType.FLOAT,
        defaultValue: 0
    })
    balance!: number;

    @BelongsToMany(() => Game, () => GamePlayer)
    games?: Game[];
}

/*class Player extends Model {}

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
});

export default Player;*/