import { RequestHandler} from "express";
import { Game } from '../models/Game.js';
import { Op } from 'sequelize';
import { GamePlayer } from "../models/GamePlayer.js";
import { Player } from "../models/Player.js";


export const createPlay: RequestHandler = async (req, res) => {
    let play = await GamePlayer.create(req.body);
    return res.status(200).json({data: play});
}
 
export const getAllGames: RequestHandler = async (req, res) => {
    const limitParam: number = Number(req.query.limit) || 10;
    const offsetParam: number = Number(req.query.offset) || 0;
    const search: string = String(req.query.search);

    if (search != 'undefined') {
        const allGames: Object = await Game.findAndCountAll({
            where: {title: {[Op.like]: '%' + search + '%'}},
            limit: limitParam, 
            offset: offsetParam
        });
        return res.status(200).json({data: allGames});
    } else {
            const allGames: Object = await Game.findAndCountAll({limit: limitParam, offset: offsetParam});
            return res.status(200).json({data: allGames});
    }
}

export const getGameById: RequestHandler = async (req, res) => {
    const { id } = req.params;

    const game: Game | null = await Game.findByPk(id);

    if (game) {
        return res.status(200).json({data: game});   
    } else {
        return res.status(404).json({message: 'Game not found'});
    }
}

export const createGame: RequestHandler = async (req, res) => {
    //console.log(req.body);
    let game = await Game.create(req.body);
    return res.status(200).json({data: game});
};

export const updateGame: RequestHandler = async (req, res) => {
    const { id } = req.params;
    //console.log(id);
    const game: Game | null = await Game.findByPk(id);

    if (game) {
        await Game.update(
            { ...req.body }, 
            { where: { uuid: id}  });
        return res.status(200).json({data: game});
    } else {
        return res.status(404).json({message: 'Game not found'});
    }
};

export const deleteGame: RequestHandler = async (req, res) => {
    const { id } = req.params;

    const game: Game | null = await Game.findByPk(id);

    if (game) {
        await Game.destroy({ where: { uuid: id }});
        return res.status(200).json({data: game });
    } else {
        return res.status(404).json({message: 'Game not found'});   
    }
};