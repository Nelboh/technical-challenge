import store from "../data/store";

function setTeamB(type, name) {
    return {
        type: type,
        payload: name,
    }
}

function handleSetTeamB(type, name) {

    store.dispatch(setTeamB(type, name))
}

export default handleSetTeamB;