import { Component } from "react";

import store from "../../data/store";

import teamSorter from "../../logic/teamSorter";

class Lists extends Component {
    constructor(props) {
        super(props);

        this.state = {
            settingsComplete: true,
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

        let teamAColour = "chosenKitColour kit" + store.getState().teamSettings[0].details.colour;
        let teamBColour = "chosenKitColour kit" + store.getState().teamSettings[1].details.colour;

        return (
            <section>
                <h2>{teamAName} VS. {teamBName}</h2>

                <div className="twoLists">

                    <section className="cardHolder">

                        <header className="cardTop kitAndName">
                            <h3 className="h3alternate">{teamAName}</h3>
                            <div className={teamAColour}></div>
                        </header>

                        <div className="cardWhite">

                            {teamA.map((player, index) => (
                                <div key={index}>
                                    <p>{player}</p>
                                </div>
                            ))}
                        </div>

                        <footer className="cardBottom"></footer>
                    </section>

                    <section className="cardHolder">

                        <header className="cardTop kitAndName">
                            <h3 className="h3alternate">{teamBName}</h3>
                            <div className={teamBColour}></div>
                        </header>

                        <div className="cardWhite">

                            {teamB.map((player, index) => (
                                <div key={index}>
                                    <p>{player}</p>
                                </div>
                            ))}

                        </div>

                        <footer className="cardBottom"></footer>
                    </section>

                </div>

                <div className="listButtons">
                    <button onClick={this.handleOpenSettings} className="pillButton">Settings</button>

                    <button onClick={this.handleReshuffle} className="pillButton">Reshuffle</button>
                </div>
            </section>
        )
    }
}

export default Lists;