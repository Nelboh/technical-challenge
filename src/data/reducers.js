// import initial from "./initial";

// const addPlayer = (state, { data }) => {
//     return {
//         ...state, playersArray: [...state.playersArray, { playerName: data.playerName }]
//     }
// }

const reducer = (state, action) => {
    switch (action.type) {

        case "ADD_PLAYER": return { ...state, playersArray: [...state.playersArray, action.newPlayer] }

        // case "ADD_PLAYER": return addPlayer(state, action);

        // case "RESET": return initial;

        default: return state;

        // as a fallback in case none of the above are used, the default returns the state unchanged
    }
};

export default reducer;