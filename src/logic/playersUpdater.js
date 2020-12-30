import store from "../data/store";

// This builds an action with the updated players array in the payload
function setPlayers(players) {
    return {
        type: "UPDATE_PLAYERS",
        payload: players,
    }
}

const playersUpdater = (players) => {
    store.dispatch(setPlayers(players))
};

export default playersUpdater;