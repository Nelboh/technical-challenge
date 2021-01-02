const initial = {

    // Placeholder names for the first time the app loads. User inputted names overwrite these in a new copy of Players[]
    "players": ["Player 1", "Player 2", "Player 3", "Player 4", "Player 5", "Player 6", "Player 7", "Player 8", "Player 9", "Player 10"],

    // Holders for the two teams of shuffled Players[]
    "teamA": [],
    "teamB": [],

    // Default settings for the Team components
    "teamSettings": [
        { "details": { "name": "Team One", "colour": "1" } },
        { "details": { "name": "Team Two", "colour": "2" } },
    ]

};

export default initial;