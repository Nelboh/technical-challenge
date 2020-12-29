import store from "../data/store";

function resetPlayers() {
    return {
        type: "RESET",
    }
}

function handleResetPlayers() {
    store.dispatch(resetPlayers());
}

export default handleResetPlayers;