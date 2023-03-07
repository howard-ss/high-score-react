import React from "react";

function HighScoreTable(props) {
  return (
    <div style={{ border: "5px solid yellowgreen", margin: "5px" }}>
      <h2 style={{color:"skyblue"}}>HIGH SCORES: {props.country}</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {props.players.map((player, index) => (
            <tr key={index}>
              <td>{player.n}</td>
              <td style={{color:"brown"}}>{player.s}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HighScoreTable;