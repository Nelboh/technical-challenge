import initial from "./initial";

const reducer = (state, action) => {
    switch (action.type) {

        // The two sets of code below do the same thing, but the top version was easier for my brain to handle.

        case "SET_TEAM_COLOUR": {
            // This selects a specific instance of details from the TeamSettings array, targeted via its index
            const index = action.payload.index;

            // Makes a copy of details (via its index), and sets its colour attribute
            const updatedColour = { ...state.teamSettings[index].details, colour: action.payload.colour };

            // Makes a copy of TeamSettings (via its index), and uses updatedColour from above to update its details
            const updatedDetails = { ...state.teamSettings[index], details: updatedColour };

            // For some reason, I also have to make a copy of the index and update the newest copy of TeamSettings with it
            const updatedTeamSetting = { ...state.teamSettings, [index]: updatedDetails };

            // Makes a copy of the entire TeamSettings and updates the newest copy of teamSettings to be the updated version
            const updatedTeamSettings = { ...state, teamSettings: updatedTeamSetting };

            // Returns the updated copy
            return updatedTeamSettings;

            // This version came from the React documentation but for me is less easy to read

            // const index = action.payload.index;
            // return {
            //     ...state,
            //     teamSettings: {
            //         ...state.teamSettings,
            //         [index]: {
            //             ...state.teamSettings[index],
            //             details: {
            //                 ...state.teamSettings[index].details,
            //                 colour: action.payload.colour
            //             }
            //         }
            //     }
            // }
        }

        // This case works in the same way as the set_team_colour one above
        case "SET_TEAM_NAME": {

            const index = action.payload.index;

            const updatedName = { ...state.teamSettings[index].details, name: action.payload.name };

            const updatedDetails = { ...state.teamSettings[index], details: updatedName };

            const updatedTeamSetting = { ...state.teamSettings, [index]: updatedDetails };

            const updatedTeamSettings = { ...state, teamSettings: updatedTeamSetting };

            return updatedTeamSettings;

            // const index = action.payload.index;

            // return {
            //     ...state,
            //     teamSettings: {
            //         ...state.teamSettings,
            //         [index]: {
            //             ...state.teamSettings[index],
            //             details: {
            //                 ...state.teamSettings[index].details,
            //                 name: action.payload.name
            //             }
            //         }
            //     }
            // }
        }

        // This sorts half of the shuffled player list into the empty teamA[]
        case "SET_TEAM_A": {
            return { ...state, teamA: action.payload };
        }

        // This sorts half of the shuffled player list into the empty teamB[]
        case "SET_TEAM_B": {
            return { ...state, teamB: action.payload };
        }

        // This sets settingsComplete to true, which is necessary for App to render either the Settings or List component
        case "SETTINGS_COMPLETE": {
            return { ...state, settingsComplete: true };
        }

        // The reverse of the above, which allows the user to go back to the Settings component
        case "SETTINGS_INCOMPLETE": {
            return { ...state, settingsComplete: false };
        }

        // This updates the value of players[]
        case "UPDATE_PLAYERS": {
            return { ...state, players: action.payload };
        }

        // This resets any of the user's changes back to their default values
        case "RESET": return {
            ...initial,
        }

        // As a fallback in case none of the above are used, the default returns the state unchanged
        default: return state;

    }
};

export default reducer;