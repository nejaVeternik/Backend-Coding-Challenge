# Backend-Coding-Challenge

Application for casino players and games management via REST API using [Node.js](node), [Express.js](https://expressjs.com), [Sequelize](https://sequelize.org/) and [SQLite3](https://sqlite.org/).

## Run application:

- ```git clone https://github.com/nejaVeternik/Backend-Coding-Challenge```
- ```cd Backend-Coding-Challenge```
- ```npm install```
- ```tsc```
- ```node .```

## API endpoints:

Run on http://localhost:3000:

| METHOD  | DESCRIPTION                                  | ENDPOINTS                                | EXAMPLES |
| ------- | -------------------------------------------- | ---------------------------------------- | -------- |            
|  GET    | Get all games                                | `/games`                                 |          |
|  GET    | Get all games with pagination                | `/games?offset=?&limit=?`                | http://localhost:3000/games?limit=2&offset=1| 
|  GET    | Search games (Case insensitive)              | `/games?search=?`                        | http://localhost:3000/games?search=poker| 
|  GET    | Get game by uuid                             | `/games/:uuid`                           | http://localhost:3000/games/3bba613d-28d7-4c6f-8f3c-6e18d6389421 |
|  POST   | Create a game (Field title is mandatory)     | `/games`                                 |          |  
|  PUT    | Update game (Update title or description)    | `/games/:uuid`                           |          |
|  DELETE | Delete Game                                  | `/games/:uuid`                           |          |
|  GET    | Get all players                              | `/players`                               |          |     
|  GET    | Get player by uuid                           | `/players/:uuid`                         | http://localhost:3000/players/90ae6f20-fe1d-4c88-8289-b115471f9d80 |
|  GET    | Get all players with pagination              | `/players?offset=?&limit=?`              | http://localhost:3000/players?limit=2&offset=1| 
|  GET    | Search players (Case insensitive)            | `/players?search=?`                      | http://localhost:3000/players?search=doe| 
|  POST   | Create a player (Fields username, firstName, lastName and email are mandatory, username and email should be unique)     | `/players` |            
|  PUT    | Update player (Update username, firstName, lastName email or balance) | `/players/:uuid`|          |
|  DELETE | Delete player                                | `/players/:uuid`                         |          |
|  GET    | Get games that player is playing with pagination support| `/players/:uuid/games?offset=?&limit=?`| http://localhost:3000/players/90ae6f20-fe1d-4c88-8289-b115471f9d80/games?offset=1&limit=2 |

Current database game uuids:
- 3bba613d-28d7-4c6f-8f3c-6e18d6389421
- 9612319b-699a-4697-ac03-3a4a5a097f13
- 5b47ebf7-24ae-4232-baa9-df77e2c2ece2
- ef1bc5f7-6a9a-4d6d-943d-10444b179ed4

player uuids:
- 90ae6f20-fe1d-4c88-8289-b115471f9d80
- 61eb9617-2d07-4f6d-b024-194fd51742a3
- 81cf1893-fbd7-4d9c-8513-17a9a60b5614
- 4075d768-8635-44b7-8e68-db32bf14a596
