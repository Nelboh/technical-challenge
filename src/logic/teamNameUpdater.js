import store from "../data/store";

function setTeamName(index, name) {
    return {
        type: "SET_TEAM_NAME",
        payload: {
            index: index,
            name: name,
        }
    }
}


const teamNameUpdater = (index, name) => {
    store.dispatch(setTeamName(index, name))
}

export default teamNameUpdater;