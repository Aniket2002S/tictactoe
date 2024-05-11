// const squareStyle = {
//     border: "2px solid #333",
//     height: "100px",
//     width: "100px",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     cursor: "pointer",
//     backgroundColor: "#fff",
//     color: "#333",
//     fontSize: "36px",
//     fontWeight: "bold",
// };

// const Square = (props) => {
//     return (
//         <div
//             onClick={props.onClick}
//             style={squareStyle}
//             className="square"
//         >
//             {props.value}
//         </div>
//     );
// };


import React from "react";
import "./style.css";

const Square = ({ value, onClick }) => {
  return (
    <div className="square" onClick={onClick}>
      {value}
    </div>
  );
};

export default Square;
