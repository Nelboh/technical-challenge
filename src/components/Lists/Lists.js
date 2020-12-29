import { Component } from "react";

import store from "../../data/store";

class Lists extends Component {
    constructor(props) {
        super(props);

        this.state = {
            settingsComplete: true,
        };

        this.handleOpenSettings = this.handleOpenSettings.bind(this);
    }

    handleOpenSettings = (e) => {
        store.dispatch({ type: "SETTINGS_INCOMPLETE" });
    }

    render() {

        let teamA = store.getState().teamA;
        let teamB = store.getState().teamB;

        return (
            <>
                <h2>Team Lists Go Here</h2>

                <h2>Team One</h2>
                {teamA.map((player, index) => (
                    <div key={index}>
                        <p>{player}</p>
                    </div>
                ))}

                <h2>Team Two</h2>
                {teamB.map((player, index) => (
                    <div key={index}>
                        <p>{player}</p>
                    </div>
                ))}

                <button onClick={this.handleOpenSettings}>Go back to Settings</button>
            </>
        )
    }
}

export default Lists;