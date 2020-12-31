import React from "react";
import initial from "../data/initial";
import store from "../data/store";

class SubmitTeams extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmitTeams = this.handleSubmitTeams.bind(this);
    }

    handleSubmitTeams = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <>
                <button
                    type="submit"
                    onClick={this.handleSubmitTeams}
                >Submit team settings</button>
            </>
        )
    }

}

export default SubmitTeams;