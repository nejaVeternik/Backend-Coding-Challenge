import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { sequelize } from './db.js';
import gamesAPI from './api/gamesAPI.js';
import playersAPI from './api/playersAPI.js';
import pkg from 'body-parser';
const { json, urlencoded } = pkg;

const app = express();

app.use(json());

app.use(urlencoded({ extended: true }));

app.use('/games', gamesAPI);

app.use('/players', playersAPI);

//sequelize.sync().then(() => console.log('db is ready'));

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}

//app.use(BodyParser.json());

//syncing sequelize with database
sequelize.sync().then().catch((err) => {
    console.log(err);
})

app.get('/', (req, res) => {
    res.send(uuidv4());
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
})
