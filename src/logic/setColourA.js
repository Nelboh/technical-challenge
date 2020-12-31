import store from "../data/store";

function setColourA(type, colour) {
    return {
        type: type,
        payload: colour,
    }
}

function handleSetColourA(type, colour) {

    store.dispatch(setColourA(type, colour))
}

export default handleSetColourA;