import initial from "./initial";
import store from "./store";


const reducer = (state, action) => {
    switch (action.type) {

        case "SET_TEAM_A": {
            return { ...state, teamA: action.payload };
        }

        case "SET_TEAM_B": {
            return { ...state, teamB: action.payload };
        }

        case "SETTINGS_COMPLETE": {
            return { ...state, settingsComplete: true };
        }

        case "SETTINGS_INCOMPLETE": {
            return { ...state, settingsComplete: false };
        }

        case "ADD_PLAYER": return { ...state, players: [...state.players, action.payload] }

        // case "ADD_PLAYER": return addPlayer(state, action);

        case "RESET": return initial;

        default: return state;

        // as a fallback in case none of the above are used, the default returns the state unchanged
    }
};

export default reducer;