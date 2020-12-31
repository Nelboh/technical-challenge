import React from "react";
import initial from "../../data/initial";
import store from "../../data/store";

class Team extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: store.getState().teamSettings[this.props.team].details.name,
            colour: store.getState().teamSettings[this.props.team].details.colour,
        }
    }

    render() {
        return (
            <>
                <h1>This is the new Team component</h1>
                <p>{this.state.name}</p>
                <p>{this.state.colour}</p>
            </>
        )
    }
}

export default Team;