const express = require("express");
const { chooseDoorFunction, gameState } = require("./chooseDoorFunction");
const app = express();

app.get("/startGame", (req, res) => {
  res.send(
    "Welcome to the game, please enter your name: curl http://localhost:5000/chooseName?name={yourName}"
  );
});

app.get("/chooseName", (req, res) => {
  let name = req.query.name;
  gameState.name = name;
  res.send(
    `Hello ${name}, to continue please choose door 1 or door 2, curl http://localhost:5000/chooseDoor?door={number}`
  );
});

app.get("/chooseDoor", (req, res) => {
  let door = req.query.door;
  let answer = chooseDoorFunction(door, gameState.name);
  res.send(answer);
});

app.get("/score", (req, res) => {
    let score = gameState.score;
    res.send(`the score is: ${score}`);
  });
  
  app.listen(5000, () => console.log("listening on 5000"));