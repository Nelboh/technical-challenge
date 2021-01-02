import store from "../data/store";

// This checks to see whether teamA and teamB have the same kit colour chosen
// TeamA has an index of 0, and teamB is 1
// If they're the same it returns false, otherwise it returns true

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