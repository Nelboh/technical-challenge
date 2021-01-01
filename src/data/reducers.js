import initial from "./initial";

const reducer = (state, action) => {
    switch (action.type) {

        // case "SET_TEAM_DETAILS": {

        //     // const index = state.teamSettings.findIndex(teamSettings => teamSettings.id !== action.payload.index);

        //     const index = action.payload.index;

        //     const updatedTeamSettings = [...state.teamSettings];

        //     updatedTeamSettings[index].details.name = action.payload.name;

        //     updatedTeamSettings[index].details.colour = action.payload.colour;

        //     return { ...state, teamSettings: updatedTeamSettings }
        // }

        case "SET_TEAM_NAME": {
            const index = action.payload.index;

            return {
                ...state,
                teamSettings: {
                    ...state.teamSettings,
                    [index]: {
                        ...state.teamSettings[index],
                        details: {
                            ...state.teamSettings[index].details,
                            name: action.payload.name
                        }
                    }
                }
            }
        }

        case "SET_TEAM_COLOUR": {
            const index = action.payload.index;

            return {
                ...state,
                teamSettings: {
                    ...state.teamSettings,
                    [index]: {
                        ...state.teamSettings[index],
                        details: {
                            ...state.teamSettings[index].details,
                            colour: action.payload.colour
                        }
                    }
                }
            }
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