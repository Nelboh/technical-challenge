import store from "../data/store";

const compareTeamNames = (index, selectedName) => {

    let teamSettings = store.getState().teamSettings;

    if (index === 0) {
        if (teamSettings[1].details.name === selectedName) {
            return false;
        } return true;
    } else {
        if (teamSettings[0].details.name === selectedName) {
            return false;
        } return true;
    }
}

export default compareTeamNames;