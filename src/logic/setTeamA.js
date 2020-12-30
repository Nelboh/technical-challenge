import store from "../data/store";

function setTeamA(type, name) {
    return {
        type: type,
        payload: name,
    }
}

function handleSetTeamA(type, name) {

    store.dispatch(setTeamA(type, name))
}

export default handleSetTeamA;