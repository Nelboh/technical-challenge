import { Component } from "react";
import store from "../../data/store";

// This is the logic that splits and shuffles the list of player names into two random teams
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

    // This sets SettingsComplete back to false, and returns the user to the Settings component
    handleOpenSettings = (e) => {
        store.dispatch({ type: "SETTINGS_INCOMPLETE" });
    }

    // This calls the original teamSorter logic and re-runs it, then updates teamA and teamB to reflect the new random values
    handleReshuffle = (e) => {
        e.preventDefault();
        teamSorter();

        this.setState({
            teamA: store.getState().teamA,
            teamB: store.getState().teamB,
        })
    }

    render() {

        // There's a lot of repeated code here. 
        // Given more time, I would refactor this to be a single component with props

        // This fetches the split and shuffled teams
        let teamA = store.getState().teamA;
        let teamB = store.getState().teamB;

        // This fetches the user's input team names
        let teamAName = store.getState().teamSettings[0].details.name;
        let teamBName = store.getState().teamSettings[1].details.name;

        // This sets the className for the kit colour icon. I found it easier to read here than inline.
        // I've concatenated the team colour (a number) onto the class name (e.g. kit1)
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