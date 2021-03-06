import { Component } from "react";
import store from "../../data/store";

// Logic files
import teamSorter from "../../logic/teamSorter";
import playersUpdater from "../../logic/playersUpdater";
import handleResetPlayers from "../../logic/resetPlayers";


class Players extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playerName: "",
            existingPlayers: store.getState().players,
            settingsComplete: false,

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleChange = (index, e) => {

        // This loop updates the saved player name in real-time (probably not the most efficient way to do this)

        let newPlayers = [];
        let i;
        for (i = 0; i < this.state.existingPlayers.length; i += 1) {

            // Checks if this is the player that needs updating via its index
            if (i === index) {

                // This forces a placeholder name into the list of players if an input field is left empty
                if (e.currentTarget.value === "") {
                    newPlayers.push("Name not set")

                } else {

                    // It also prevents an input name being longer than 16 characters, with an ellipsis added

                    let name = e.currentTarget.value;
                    if (name.length > 16) {
                        name = name.slice(0, 16) + "...";
                    }
                    newPlayers.push(name)
                }
            } else {
                newPlayers.push(this.state.existingPlayers[i])
            }
        }

        this.setState({ existingPlayers: newPlayers });
    }

    // Once the players have been input, the submit button updates the player list in store state
    // Then it runs the teamSorter logic to shuffle and split the teams
    // Then settings complete is set to true via settings_complete, so the List component will render instead
    handleSubmit = (e) => {
        e.preventDefault();
        playersUpdater(this.state.existingPlayers);
        teamSorter();
        store.dispatch({ type: "SETTINGS_COMPLETE" });
    }

    // This button allows the user to reset all input fields and colour choices back to the default
    handleReset = (e) => {
        e.preventDefault();
        handleResetPlayers("RESET");
        window.location.reload();
    }

    render() {

        return (
            <section>
                <div className="playerColumns cardGreen">

                    {/* This creates new entries for the player list by mapping through the array of player names */}
                    {this.state.existingPlayers.map((player, index) => (
                        <div className="playerRows" key={index}>

                            <label htmlFor="player name" className="playerLabel">Player {index + 1}</label>

                            <input
                                defaultValue={player}
                                index={index}
                                onBlur={this.handleChange.bind(this, index)}
                                onFocus={(e) => e.target.value = ""}
                                name="player name"
                            ></input>

                        </div>
                    ))}

                </div>

                <footer className="cardBottom playersButtons">

                    <button onClick={this.handleReset} className="pillButton" aria-label="Reset settings">Reset all</button>

                    <button type="submit" onClick={this.handleSubmit} className="pillButton" aria-label="Generate Teams">Generate Teams</button>

                </footer>

            </section >
        )
    }
}

export default Players;