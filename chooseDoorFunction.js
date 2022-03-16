const gameState = {
    score: 0,
    name: "",
  };
  
  const chooseDoorFunction = (door, name) => {
    if (door === "1") {
      return (
        "wrong door, you lose " +
        name +
        ". To play again curl http://localhost:5000/startGame"
      );
    } else if (door === "2") {
      gameState.score = gameState.score + 1;
      return name + ", you win.  To play again curl http://localhost:5000/startGame";
    }
  };
  module.exports = { chooseDoorFunction, gameState };