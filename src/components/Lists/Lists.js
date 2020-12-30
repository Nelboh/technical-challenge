import { Component } from "react";

import store from "../../data/store";
import teamSorter from "../../logic/teamSorter";

class Lists extends Component {
    constructor(props) {
        super(props);

        this.state = {
            settingsComplete: true,
            teamAName: store.getState().teamAName,
            teamBName: store.getState().teamBName,
        };

        this.handleOpenSettings = this.handleOpenSettings.bind(this);

        this.handleReshuffle = this.handleReshuffle.bind(this);
    }

    handleOpenSettings = (e) => {
        store.dispatch({ type: "SETTINGS_INCOMPLETE" });
    }

    handleReshuffle = (e) => {
        e.preventDefault();
        teamSorter();

        this.setState({
            teamA: store.getState().teamA,
            teamB: store.getState().teamB,
        })
    }

    render() {

        let teamA = store.getState().teamA;
        let teamB = store.getState().teamB;
        let teamAName = store.getState().teamAName;
        let teamBName = store.getState().teamBName;

        return (
            <>
                <h2>Team Lists Go Here</h2>

                <h2>{teamAName}</h2>
                {teamA.map((player, index) => (
                    <div key={index}>
                        <p>{player}</p>
                    </div>
                ))}

                <h2>{teamBName}</h2>
                {teamB.map((player, index) => (
                    <div key={index}>
                        <p>{player}</p>
                    </div>
                ))}

                <button onClick={this.handleOpenSettings}>Go back to Settings</button>

                <button onClick={this.handleReshuffle}>Reshuffle</button>
            </>
        )
    }
}

export default Lists;