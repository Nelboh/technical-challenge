import React from "react";
import Team from "./Team/Team";

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

            <form onSubmit={this.handleSubmitTeams}>

                <Team team="0" defaultTeamName="Team One" />

                <Team team="1" defaultTeamName="Team Two" />

                <button
                    type="submit"
                    className="pillButton"
                >Submit team settings</button>
            </form>

        )
    }

}

export default SubmitTeams;