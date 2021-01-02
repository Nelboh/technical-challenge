import store from "../data/store";

function setTeamColour(index, colour) {
    return {
        type: "SET_TEAM_COLOUR",
        payload: {
            index: index,
            colour: colour
        },
    }
}

const teamColourUpdater = (index, colour) => {
    store.dispatch(setTeamColour(index, colour))
}

export default teamColourUpdater;