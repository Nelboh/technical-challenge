import React from "react";
import store from "../../data/store";
import handleAddNewPlayer from "../../logic/addNewPlayer";
import handleResetPlayers from "../../logic/resetPlayers";

class AddPlayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playerName: "",
            players: [],
        };

        this.handlePlayerName = this.handlePlayerName.bind(this);
        // this.handleAddPlayer = this.handleAddPlayer.bind(this);
        this.handleAddToArray = this.handleAddToArray.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    // Tracks the player name from the input field
    handlePlayerName(e) {
        this.setState({ playerName: e.currentTarget.value });
    }

    // Makes a new copy of the array and adds a new player to it
    // handleAddPlayer = (e) => {
    //     e.preventDefault();
    //     this.setState({ players: [...this.state.players, this.state.playerName], playerName: "" });
    // }

    handleAddToArray = (e) => {
        e.preventDefault();
        this.setState({ players: [...this.state.players, this.state.playerName], playerName: "" });
        handleAddNewPlayer("ADD_PLAYER", this.state.playerName)
    }

    handleReset = e => {
        e.preventDefault();
        handleResetPlayers("RESET");
    }

    render() {
        let { players, playerName } = this.state;

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
                        disabled={this.state.playerName.length < 1 || this.state.players.length === 10}
                    >Add Player</button>


                    <button onClick={this.handleAddToArray}>Add to array</button>

                    <button onClick={this.handleReset}>Reset</button>
                </div>

                {/* Slice limits the number of players you can enter to 10 */}
                <>
                    {players.slice(0, 10).map((playerName, index) => (
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