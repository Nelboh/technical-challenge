import React from "react";

class AddPlayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playerName: "",
            playersArray: [],
        };

        this.handlePlayerName = this.handlePlayerName.bind(this);
        this.handleAddPlayer = this.handleAddPlayer.bind(this);

    }

    // Tracks the player name from the input field
    handlePlayerName(e) {
        this.setState({ playerName: e.currentTarget.value });
    }

    // Makes a new copy of the array and adds a new player to it
    handleAddPlayer = (e) => {
        e.preventDefault();
        this.setState({ playersArray: [...this.state.playersArray, this.state.playerName], playerName: "" });
    }


    render() {
        let { playersArray, playerName } = this.state;

        return (
            <>
                <div className="listInputs">
                    <input
                        type="text"
                        placeholder="Add a player"
                        onChange={this.handlePlayerName}
                        playerName={playerName}
                    />

                    {/* Button will be disabled if input field is empty or 10 players have already been entered */}
                    <button
                        className="pillButton"
                        type="submit"
                        onClick={this.handleAddPlayer}
                        disabled={this.state.playerName.length < 1 || this.state.playersArray.length === 10}
                    >Add Player</button>
                </div>

                {/* Slice limits the number of players you can enter to 10 */}
                <>
                    {playersArray.slice(0, 10).map((playerName, index) => (
                        <div key={index}>
                            <h3>Player {index + 1}</h3>

                            <p>{playerName}</p>

                        </div>
                    ))}
                </>

            </>

        );

    }
}

export default AddPlayer;