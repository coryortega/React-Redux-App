import React from "react";
import { connect } from "react-redux";
import { fetchGames } from "../actions";

function GameList(props) {


  return (
    <>
      <button onClick={() => props.dispatch(fetchGames())}>Get Data</button>
      {props.isFetching && <div>CHILL DUDE UR GAMES ARE COMING...</div>}
      {props.error && <div>{props.error.message}</div>}
      <ul className="games">
        {props.games.map(game => (
            <div key={game.id} className = "game">
            <h3>
            {game.name}
            </h3>
            <img src={game.background_image} className="game_img" alt="cool"></img>
            </div>
        ))}
      </ul>
    </>
  );
}

export default connect(state => {
  console.log("mapStateToProps.STATE", state);
  return state;})(GameList);