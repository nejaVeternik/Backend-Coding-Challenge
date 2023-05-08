import { Router } from 'express';
import { createPlayer, deletePlayer, getAllPlayers, getPlayerById, updatePlayer } from "../controller/playerController.js";

const router = Router();

router.get('/', getAllPlayers);

router.get('/:id', getPlayerById);

router.post("/", createPlayer);

router.put('/:id', updatePlayer);

router.delete("/:id", deletePlayer);

export default router;