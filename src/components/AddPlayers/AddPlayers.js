import React from "react";
import initial from "../../data/initial";
import store from "../../data/store";
import handleAddNewPlayer from "../../logic/addNewPlayer";
import handleResetPlayers from "../../logic/resetPlayers";
import PlayerInput from "../PlayerInput";

class AddPlayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playerName: "",
            players: [],
        };

        this.handlePlayerName = this.handlePlayerName.bind(this);
        this.handleAddToArray = this.handleAddToArray.bind(this);
        this.handleReset = this.handleReset.bind(this);
        // this.handleUpdate = this.handleUpdate.bind(this);

        // this.handleSubmitAll = this.handleSubmitAll(this);
        this.handleValidation = this.handleValidation(this);
    }

    // Tracks the player name from the input field
    handlePlayerName = (e) => {
        this.setState({ playerName: e.currentTarget.value });
    }

    handleAddToArray = (e) => {
        e.preventDefault();
        this.setState({ players: [...this.state.players, this.state.playerName], playerName: "" });
        handleAddNewPlayer("ADD_PLAYER", this.state.playerName)
    }


    // Will need to make an option to edit input names. Currently, submitted names appear as a list of uneditable inputs

    // handleUpdate = (e, index) => {
    //     let players = [...this.state.players];
    //     players[index] = e.currentTarget.value;
    //     this.setState({ players });

    // }

    // Resets the list of inputs to its initial (empty) state. Window.location.reload forces a refresh of the page, which also removes any mapped JSX. There is probably a better way to do this that I haven't come across!
    handleReset = (e) => {
        e.preventDefault();
        handleResetPlayers("RESET");
        window.location.reload();
    }

    handleValidation = () => {
        let playerName = this.state.playerName;
        let formIsValid = true;

        if (!playerName["Player Name"]) {
            formIsValid = false;
        }
    }

    // handleSubmitAll = (e) => {


    //     //     this.setState({ players: [...this.state.players, this.state.playerName], playerName: "" });
    //     //     handleAddNewPlayer("ADD_PLAYER", this.state.playerName)
    // }

    render() {
        let { players, playerName, formIsValid } = this.state;

        return (
            <>

                <h1>Add custom players</h1>

                {/* <form onSubmit={this.handleAddToArray}>
                    <PlayerInput
                        type="text"
                        label="Player 1 Name"
                        playerName={playerName}
                        onChange={this.handlePlayerName}
                    />

                    <PlayerInput
                        type="text"
                        label="Player 2 Name"
                        playerName={playerName}
                        onChange={this.handlePlayerName}
                    />

                    <PlayerInput
                        type="text"
                        label="Player 3 Name"
                        playerName={playerName}
                        onChange={this.handlePlayerName}
                    />

                    <PlayerInput
                        type="text"
                        label="Player 4 Name"
                        playerName={playerName}
                        onChange={this.handlePlayerName}
                    />

                    <PlayerInput
                        type="text"
                        label="Player 5 Name"
                        playerName={playerName}
                        onChange={this.handlePlayerName}
                    />

                    <PlayerInput
                        type="text"
                        label="Player 6 Name"
                        playerName={playerName}
                        onChange={this.handlePlayerName}
                    />

                    <PlayerInput
                        type="text"
                        label="Player 7 Name"
                        playerName={playerName}
                        onChange={this.handlePlayerName}
                    />

                    <PlayerInput
                        type="text"
                        label="Player 8 Name"
                        playerName={playerName}
                        onChange={this.handlePlayerName}
                    />

                    <PlayerInput
                        type="text"
                        label="Player 9 Name"
                        playerName={playerName}
                        onChange={this.handlePlayerName}
                    />

                    <PlayerInput
                        type="text"
                        label="Player 10 Name"
                        playerName={playerName}
                        onChange={this.handlePlayerName}
                    />

                    <button
                        className="pillButton"
                        type="submit"
                        // onClick={this.handleAddPlayer}
                        // onClick={this.handleAddToArray}
                        disabled={formIsValid === false}
                    >Add Player</button>
                </form> */}

                {/* <div className="listInputs">
                    <input
                        type="text"
                        placeholder="Add a player"
                        onChange={this.handlePlayerName}
                        playerName={playerName}
                    /> */}

                {/* Button will be disabled if input field is empty or 10 players have already been entered */}
                {/* <button
                        className="pillButton"
                        type="submit"
                        // onClick={this.handleAddPlayer}
                        onClick={this.handleAddToArray}
                        disabled={this.state.playerName.length < 1 || this.state.players.length === 10}
                    >Add Player</button>


                    <button onClick={this.handleAddToArray}>Add to array</button>

                    <button onClick={this.handleReset}>Reset</button>
                </div> */}

                <button
                    // onClick={ }
                    disabled={this.state.players.length !== 10}
                >Generate Teams!</button>


                {/* Slice limits the number of players you can enter to 10 */}
                <>
                    {players.slice(0, 10).map((playerName, index) => (
                        <div key={index}>
                            <h3>Player {index + 1}</h3>

                            <input
                                type="text"
                                onChange={this.handlePlayerName, index}
                                // onBlur={() => this.props.actions.updateName(this.state.playerName)}
                                placeholder={playerName}
                                playerName={playerName}
                            />
                            {/* <button
                                onClick={this.handleUpdate}
                            >Update</button> */}

                        </div>
                    ))}
                </>

            </>

        );

    }
}

export default AddPlayer;