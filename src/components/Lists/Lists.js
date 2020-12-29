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
        return (
            <>
                <h2>Team Lists Go Here</h2>

                <button onClick={this.handleOpenSettings}>Go back to Settings</button>
            </>
        )
    }
}

export default Lists;