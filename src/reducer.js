const initialState = {
  auth: false,
  login: "",
  password: "",
  teams: [[]],
  activePage: 0,
  counter: 0,
  loading: true,
  players: [],
  trackedPlayers: [],
  countPlayers: 0,
  tournamentDetails:{}
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_TEAMS":
      return {
        ...state,
        teams: action.payload,
      };
    case "ACTIVE_PAGE":
      return {
        ...state,
        activePage: action.payload,
      };
    case "LOADING":
      return {
        ...state,
        loading: false,
      };
    case "LOAD_PLAYERS":
      return {
        ...state,
        players: action.payload,
      };
    case "LOGIN":
      return {
        ...state,
        auth: true,
      };
    case "TRACKED_PLAYERS_UPDATE":
      return {
        ...state,
        trackedPlayers: action.payload,
      };
    case "COUNT_PLAYERS_UPDATE":
      return {
        ...state,
        countPlayers: action.payload,
      };
    case "TOURNAMENT_DETAILTS_UPDATE":
      return{
        ...state,
        tournamentDetails: action.payload
      }
    default:
      return state;
  }
};
export default reducer;
