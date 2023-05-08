import { Router } from 'express';
import { createGame, deleteGame, createPlay, getAllGames, getGameById, updateGame } from "../controller/gameController.js";

const router = Router();

router.get('/', getAllGames);

router.get('/:id', getGameById);

router.post('/', createGame);

router.put('/:id', updateGame);

router.delete("/:id", deleteGame);

router.post('/play', createPlay);

export default router;