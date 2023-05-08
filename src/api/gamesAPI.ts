import { Router } from 'express';
import { createGame, deleteGame, getAllGames, getGameById, updateGame } from "../controller/gameController.js";

const router = Router();

router.get('/', getAllGames);

router.get('/:id', getGameById);

router.post('/', createGame);

router.put('/:id', updateGame);

router.delete("/:id", deleteGame);

export default router;


/*import { create } from 'controller/gameController.js';

const router = new express.Router();

/*router.get('/', (req, res) => {
    res.send('Hello');
});

const gamesRouter = (app) => {

    app.route('/game')

    //router.get('/api', Game);

    router.post('/', create);

}



export { gamesRouter };*/