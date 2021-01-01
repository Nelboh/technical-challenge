import store from "../data/store";

const compareTeamColours = (index, selectedColour) => {

    let teamSettings = store.getState().teamSettings;

    if (index === 0) {
        if (teamSettings[1].details.colour === selectedColour) {
            return false;
        } return true;
    } else {
        if (teamSettings[0].details.colour === selectedColour) {
            return false;
        } return true;
    }
}

export default compareTeamColours;