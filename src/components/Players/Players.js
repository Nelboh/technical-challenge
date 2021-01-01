import { Component } from "react";
import store from "../../data/store";

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

        let newPlayers = [];
        let i;
        for (i = 0; i < this.state.existingPlayers.length; i += 1) {

            if (i === index) {
                newPlayers.push(e.currentTarget.value)
            } else {
                newPlayers.push(this.state.existingPlayers[i])
            }
        }

        this.setState({ existingPlayers: newPlayers });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        playersUpdater(this.state.existingPlayers);
        teamSorter();
        store.dispatch({ type: "SETTINGS_COMPLETE" });
    }

    handleReset = (e) => {
        e.preventDefault();
        handleResetPlayers("RESET");
        window.location.reload();
    }

    render() {

        return (
            <section>
                <div className="playerColumns cardGreen">

                    {this.state.existingPlayers.map((player, index) => (
                        <div className="playerRows" key={index}>

                            <h3 className="playerLabel">Player {index + 1}</h3>

                            <input
                                defaultValue={player}
                                index={index}
                                onBlur={this.handleChange.bind(this, index)}
                            ></input>

                        </div>
                    ))}

                </div>

                <footer className="cardBottom playersButtons">

                    <button onClick={this.handleReset} className="pillButton">Reset all</button>

                    <button type="submit" onClick={this.handleSubmit} className="pillButton">Generate Teams</button>

                </footer>

            </section>
        )
    }
}

export default Players;