import { Router } from 'express';
import { createPlayer } from "../controller/playerController.js";

const router = Router();

router.post("/", createPlayer);

export default router;