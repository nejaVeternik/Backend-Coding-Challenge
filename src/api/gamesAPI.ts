import { Router } from 'express';
import { createGame } from "../controller/gameController.js";

const router = Router();

router.post("/", createGame);

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