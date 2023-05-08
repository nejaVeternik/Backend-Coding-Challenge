import { RequestHandler } from "express";
import { Player } from '../models/Player.js';
import express from 'express';

const app = express();

app.use(express.json());

export const createPlayer: RequestHandler = async (req, res, next) => {
    console.log(req.body);
    let player = await Player.create(req.body);
    return res
        .status(200)
        .json({ message: 'Player created successfully', data: player});
};