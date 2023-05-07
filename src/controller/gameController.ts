import { RequestHandler } from "express";
import { Game } from '../models/Game.js';
import express from 'express';
import BodyParser from 'body-parser';

const app = express();

app.use(express.json());

export const createGame: RequestHandler = async (req, res, next) => {
    console.log(req.body);
    let game = await Game.create(req.body);
    return res
        .status(200)
        .json({ message: 'Game created successfully', data: game});
};

//import { Game } from '../models/Game';

/*const create = async (req, res) => {
    try {
        const { title, description } = req.body;

        const game = await Game.create(req.body)

        res.status(201).json({
            status: 'success'
        })
    } catch (err: str) {
        return err.name;
    }
}

export { create }*/