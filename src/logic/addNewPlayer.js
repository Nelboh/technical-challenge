import store from "../data/store";

function addNewPlayer(type, name) {
    return {
        type: type,
        payload: name,
    }
}

function handleAddNewPlayer(type, name) {

    store.dispatch(addNewPlayer(type, name))
}

export default handleAddNewPlayer;