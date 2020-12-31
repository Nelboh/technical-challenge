import initial from "./initial";

const reducer = (state, action) => {
    switch (action.type) {

        case "SET_TEAM_DETAILS": {

            // const index = state.teamSettings.findIndex(teamSettings => teamSettings.id !== action.payload.index);

            const index = action.payload.index;

            const updatedTeamSettings = [...state.teamSettings];

            updatedTeamSettings[index].details.name = action.payload.name;

            updatedTeamSettings[index].details.colour = action.payload.colour;

            return { ...state, teamSettings: updatedTeamSettings }
        }

        case "SET_TEAM_A_NAME": {
            return { ...state, teamAName: action.payload }
        }

        case "SET_TEAM_B_NAME": {
            return { ...state, teamBName: action.payload }
        }

        case "SET_TEAM_A_COLOUR": {
            return { ...state, teamAColour: action.payload }
        }

        case "SET_TEAM_A": {
            return { ...state, teamA: action.payload };
        }

        case "SET_TEAM_B": {
            return { ...state, teamB: action.payload };
        }

        case "SETTINGS_COMPLETE": {
            return { ...state, settingsComplete: true };
        }

        case "SETTINGS_INCOMPLETE": {
            return { ...state, settingsComplete: false };
        }

        case "UPDATE_PLAYERS": {
            return { ...state, players: action.payload };
        }

        case "RESET": return {
            ...initial,
        }

        // as a fallback in case none of the above are used, the default returns the state unchanged
        default: return state;

    }
};

export default reducer;