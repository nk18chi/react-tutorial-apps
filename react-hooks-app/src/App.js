import React, { useState } from "react";
import "./App.scss";
import { useEffect } from "react";

const INIT = [];
const MAX_METRIX_NUM = 3;
const PLAYERS = ["○", "×"];

function App() {
  const [metrix, setMetrix] = useState(INIT);
  const [currentPlayer, setCurrentPlayer] = useState(PLAYERS[0]);
  const [winner, setWinner] = useState(false);
  const [selectRow, setSelectRow] = useState(null);
  const [selectCol, setSelectCol] = useState(null);
  const [reset, setReset] = useState(false);
  const [tieGame, setTieGame] = useState(false);

  useEffect(() => {
    setReset(false);
    setWinner(false);
    setTieGame(false);
    const tempMetrix = [];
    const row = new Array(MAX_METRIX_NUM).fill(null);
    for (let i = 0; i < MAX_METRIX_NUM; i++) {
      tempMetrix.push([...row]);
    }
    setMetrix(tempMetrix);
  }, [reset]);

  useEffect(() => {
    isTieGame();
    isWinner(selectRow, selectCol);
  });

  function handleClickSquare(r, c) {
    if (!winner && !metrix[r][c]) {
      setSelectRow(r);
      setSelectCol(c);
      let nextPlayer = currentPlayer === PLAYERS[0] ? PLAYERS[1] : PLAYERS[0];
      setCurrentPlayer(nextPlayer);
      let newMetrix = [...metrix];
      newMetrix[r][c] = nextPlayer;
      setMetrix(newMetrix);
    }
  }

  function handleReset() {
    setReset(true);
  }

  function isTieGame() {
    let typedSquare = 0;
    metrix.forEach(cols => {
      cols.forEach(square => {
        if (square !== null) typedSquare++;
      });
    });
    if (typedSquare === MAX_METRIX_NUM * MAX_METRIX_NUM) {
      setTieGame(true);
    }
  }

  function isWinner(r, c) {
    let vertical = true;
    let horizontal = true;
    let dialognal1 = true;
    let dialognal2 = true;

    if (r === null || c === null) {
      return;
    }

    for (let i = 0; i < MAX_METRIX_NUM; i++) {
      if (metrix[i][c] !== currentPlayer) {
        horizontal = false;
      }
      if (metrix[r][i] !== currentPlayer) {
        vertical = false;
      }
      if (metrix[i][i] !== currentPlayer) {
        dialognal1 = false;
      }
      if (metrix[i][MAX_METRIX_NUM - i - 1] !== currentPlayer) {
        dialognal2 = false;
      }
    }
    if (vertical || horizontal || dialognal1 || dialognal2) {
      setWinner(true);
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={handleReset}>reset</button>
        {metrix.map((col, ci) => (
          <div className='col' key={ci}>
            {col.map((row, ri) => (
              <div
                key={ri}
                className='square'
                onClick={() => {
                  handleClickSquare(ri, ci);
                }}
              >
                {metrix[ri][ci]}
              </div>
            ))}
          </div>
        ))}
        {winner && `Player ${currentPlayer} is a winner`}
        {!winner && tieGame && "Game is tie"}
      </header>
    </div>
  );
}

export default App;
