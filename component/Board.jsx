// import { faVault } from "@fortawesome/free-solid-svg-icons";
// import React, {useState} from "react";
// import Square from "./square";

// const Board = () => {
//     const boardStyle = {
//         textAlign: "center",
//         fontFamily: "Arial, sans-serif",
//     };
    
//     const rowStyle = {
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         marginBottom: "10px",
//     };
    

//     const [state, setState] = useState(Array(9).fill(null));
//     const [isXTurn, setIsXTurn] = useState(true);
//     const checkWinner = () => {
//         const winnerLogic = [
//           [0, 1, 2],
//           [3, 4, 5],
//           [6, 7, 8],
//           [0, 3, 6],
//           [1, 4, 7],
//           [2, 5, 8],
//           [0, 4, 8],
//           [2, 4, 6]
//         ];
    
//         for (let logic of winnerLogic) {
//           const [a, b, c] = logic;
//           if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
//             return state[a];
//           }
//         }
    
//         return false;
//       };
//       const isWinner = checkWinner();

//       const handleClick = (index) => {
//         if(state[index] !== null) return ;
//         const copyState = [...state];
//         copyState[index] = isXTurn? "X":"O";
//         setState(copyState);
//         setIsXTurn(!isXTurn);
//       }
//     const handleReset = () =>
//     {
//         setState(Array(9).fill(null));
//     }
//     return (
//         <div style={boardStyle}>
//          {isWinner ?
//          (
//             <>
//             <h1>winner of game is {isWinner}</h1>
//             <button onClick={handleReset}>Rastart game</button>
//             </>
//          ):
//          (
//          <>
//          <h4>player will play {isXTurn ? "X" : "O"}</h4>
//             <div style={rowStyle}>
//                 <Square onClick={() => handleClick(0)} value={state[0]} />
//                 <Square onClick={() => handleClick(1)} value={state[1]} />
//                 <Square onClick={() => handleClick(2)} value={state[2]} />
//             </div>
//             <div style={rowStyle}>
//                 <Square onClick={() => handleClick(3)} value={state[3]} />
//                 <Square onClick={() => handleClick(4)} value={state[4]} />
//                 <Square onClick={() => handleClick(5)} value={state[5]} />
//             </div>
//             <div style={rowStyle}>
//                 <Square onClick={() => handleClick(6)} value={state[6]} />
//                 <Square onClick={() => handleClick(7)} value={state[7]} />
//                 <Square onClick={() => handleClick(8)} value={state[8]} />
//             </div>
//             </>
//             )
//         }
//         </div>
//     );
// };

// export default Board;



import React, { useState } from "react";
import Square from "./square";
import "./style.css";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }

    return false;
  };

  const isWinner = checkWinner();

  const handleClick = (index) => {
    if (state[index] !== null || isWinner) return;
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
    setIsXTurn(true);
  };

  return (
    <div className="board-container">
      {isWinner ? (
        <>
          <h1 className="winner-text">Winner: {isWinner}</h1>
          <button className="reset-button" onClick={handleReset}>Restart Game</button>
        </>
      ) : (
        <>
          <h4 className="player-text">Player {isXTurn ? "X" : "O"}'s Turn</h4>
          <div className="board">
            {state.map((value, index) => (
              <Square key={index} value={value} onClick={() => handleClick(index)} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
