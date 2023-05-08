import { RequestHandler } from "express";
import { Player } from '../models/Player.js';
import express from 'express';

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
    const limitParam: number = Number(req.query.limit);
    const offsetParam: number = Number(req.query.offset);

    const allPlayers: Object = await Player.findAndCountAll({limit: limitParam, offset: offsetParam});
    return res.status(200).json({data: allPlayers});    
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