import initial from "./initial";

const reducer = (state, action) => {
    switch (action.type) {

        case "ADD_PLAYER": return { ...state, playersArray: [...state.playersArray, action.newPlayer] }

        case "TYPE_PLAYER_NAME": return

        // case "RESET": return initial;

        default: return state; // as a fallback in case none of the above are used, the default returns the state unchanged
    }
};

export default reducer;