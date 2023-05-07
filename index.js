import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Game } from './API/Game.js';
import { Player } from './API/Player.js';
import BodyParser from 'body-parser';
import { sequelize } from './db.js';

const app = express();

//sequelize.sync().then(() => console.log('db is ready'));

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.use(BodyParser.json());

//syncing sequelize with database
sequelize.sync().then().catch((err) => {
    console.log(err);
})

app.get('/', (req, res) => {
    res.send(uuidv4());
});

app.post('/game', (req, res) => {
    //Game.sync();
    Game.create(req.body).then(() => {
        res.send('game is inserted');
    })
});

app.post('/player', (req, res) => {
    Player.create(req.body).then(() => {
        res.send('player is inserted');
    })
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
})
