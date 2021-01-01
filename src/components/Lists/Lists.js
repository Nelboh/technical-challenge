import { Component } from "react";

import store from "../../data/store";

import teamSorter from "../../logic/teamSorter";

class Lists extends Component {
    constructor(props) {
        super(props);

        this.state = {
            settingsComplete: true,
            teamAName: store.getState().teamSettings[0].details.name,
            teamBName: store.getState().teamSettings[1].details.name,
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
        let teamAName = store.getState().teamSettings[0].details.name;
        let teamBName = store.getState().teamSettings[1].details.name;

        return (
            <>
                <h2>Team Lists Go Here</h2>

                <section className="cardWhite">
                    <h3>{teamAName}</h3>
                    {teamA.map((player, index) => (
                        <div key={index}>
                            <p>{player}</p>
                        </div>
                    ))}
                </section>

                <section className="cardWhite">
                    <h3>{teamBName}</h3>
                    {teamB.map((player, index) => (
                        <div key={index}>
                            <p>{player}</p>
                        </div>
                    ))}
                </section>

                <button onClick={this.handleOpenSettings} className="pillButton">Go back to Settings</button>

                <button onClick={this.handleReshuffle} className="pillButton">Reshuffle</button>
            </>
        )
    }
}

export default Lists;