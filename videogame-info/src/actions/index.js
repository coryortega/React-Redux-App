export const FETCH_GAMES_LOADING = "FETCH_GAMES_LOADING";
export const FETCH_GAMES_SUCCESS = "FETCH_GAMES_SUCCESS";
export const FETCH_GAMES_FAILED = "FETCH_GAMES_FAILED";

export const gamesLoading = () => ({ type: FETCH_GAMES_LOADING });
export const gamesLoadSuccess = data => ({
  type: FETCH_GAMES_SUCCESS,
  payload: data
});
export const gamesLoadFailure = error => ({
  type: FETCH_GAMES_FAILED,
  payload: error
});

export function fetchGames() {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function(dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(gamesLoading());

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(`https://api.rawg.io/api/games`)
      .then(response => response.json())
      .then(json =>
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.
        dispatch(gamesLoadSuccess(json.results), console.log(json.results))
      )
      .catch(error => dispatch(gamesLoadFailure(error)));
  };
}