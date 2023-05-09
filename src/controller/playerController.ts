import { RequestHandler } from "express";
import { Player } from '../models/Player.js';
import express from 'express';
import { Op } from 'sequelize';
import { GamePlayer } from "../models/GamePlayer.js";
import { Game } from "../models/Game.js";

const app = express();

app.use(express.json());

export const createPlayer: RequestHandler = async (req, res) => {
    console.log(req.body);
    let player = await Player.create(req.body);
    return res
        .status(200)
        .json({ message: 'Player created successfully', data: player});
};

export const getAllPlayers: RequestHandler = async (req, res) => {
    const limitParam: number = Number(req.query.limit) || 10;
    const offsetParam: number = Number(req.query.offset) || 0;
    const search: string = String(req.query.search);

    if (search != 'undefined') {
        const allPlayers: Object = await Player.findAndCountAll({
            where: {username: {[Op.like]: '%' + search + '%'}},
            limit: limitParam, 
            offset: offsetParam
        });
        return res.status(200).json({data: allPlayers});
    } else {
            const allPlayers: Object = await Player.findAndCountAll({limit: limitParam, offset: offsetParam, include: Game});
            return res.status(200).json({data: allPlayers});
    }
}

export const getPlayerById: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const player: Player | null = await Player.findByPk(id);

    if (player) {
        return res.status(200).json({data: player});   
    } else {
        return res.status(404).json({message: 'Player not found'});
    }
}

export const updatePlayer: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const player: Player | null = await Player.findByPk(id);

    if (player) {
        await Player.update(
            { ...req.body }, 
            { where: { uuid: id}  });
        return res.status(200).json({data: player});
    } else {
        return res.status(404).json({message: 'Player not found'});
    }
};

export const deletePlayer: RequestHandler = async (req, res) => {
    const { id } = req.params;

    const player: Player | null = await Player.findByPk(id);

    if (player) {
        await Player.destroy({ where: { uuid: id }});
        return res.status(200).json({data: player });
    } else {
        return res.status(404).json({message: 'Player not found'});   
    }
};


export const getPlayerGames: RequestHandler = async (req, res) => {
    const limitParam: number = Number(req.query.limit) || 10;
    const offsetParam: number = Number(req.query.offset) || 0;
    const { id } = req.params;

    let gamesList: Game[] = [];

    let games: GamePlayer[] = await GamePlayer.findAll({
        where: {playerUuid: id}
    });

    for (let game of games) {
        let gameId: string = game.dataValues.gameUuid

        const fetchedGame: Game | null = await Game.findByPk(gameId);  
        if (fetchedGame) {
            gamesList.push(fetchedGame);
        }
    }

    let listLenght: number = gamesList.length;

    if (listLenght > limitParam) {
        gamesList = gamesList.slice(offsetParam, offsetParam + limitParam);
    } else {
        gamesList = gamesList.slice(offsetParam);
    }

    const player: Player | null = await Player.findByPk(id);
    
    if (player) {
        return res.status(200).json({data: gamesList});   
    } else {
        return res.status(404).json({message: 'Player not found'});
    }
}