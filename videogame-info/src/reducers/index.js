import {
    FETCH_GAMES_LOADING,
    FETCH_GAMES_SUCCESS,
    FETCH_GAMES_FAILED
  } from "../actions";
  
  const initialState = {
    games: [],
    error: null,
    isFetching: false
  };
  
  function reducer(state = initialState, action) {
    console.log("reducer", action);
    switch (action.type) {
      case FETCH_GAMES_LOADING:
        return {
          ...state,
          isFetching: true,
          error: null
        };
      case FETCH_GAMES_SUCCESS:
        return {
          ...state,
          games: action.payload,
          isFetching: false,
          error: null
        };
      case FETCH_GAMES_FAILED:
        return {
          ...state,
          games: [],
          isFetching: false,
          error: action.payload
        };
      default:
        return state;
    }
  }
  
  export default reducer;