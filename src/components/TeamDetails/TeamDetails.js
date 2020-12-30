import React from "react";
import initial from "../../data/initial";
import store from "../../data/store";
import handleSetTeamA from "../../logic/setTeamA";
import handleSetTeamB from "../../logic/setTeamB";

class TeamDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            teamAName: "",
            teamBName: "",
        };

        this.handleTeamAName = this.handleTeamAName.bind(this);
        this.handleSubmitTeamA = this.handleSubmitTeamA.bind(this);

        this.handleTeamBName = this.handleTeamBName.bind(this);
        this.handleSubmitTeamB = this.handleSubmitTeamB.bind(this);

    }

    handleTeamAName = (e) => {
        this.setState({ teamAName: e.currentTarget.value });
    }

    handleSubmitTeamA = (e) => {
        e.preventDefault();
        this.setState({ teamAName: [...this.state.teamAName, this.state.teamAName], teamAName: "" });
        handleSetTeamA("SET_TEAM_A_NAME", this.state.teamAName)
    }

    handleTeamBName = (e) => {
        this.setState({ teamBName: e.currentTarget.value });
    }

    handleSubmitTeamB = (e) => {
        e.preventDefault();
        this.setState({ teamBName: [...this.state.teamBName, this.state.teamBName], teamBName: "" });
        handleSetTeamB("SET_TEAM_B_NAME", this.state.teamBName)
    }

    render() {
        return (
            <>
                <h1>Set Team Names</h1>

                <h3>Team One Name</h3>
                <input onChange={this.handleTeamAName} />

                <button onClick={this.handleSubmitTeamA}>Finished</button>

                <h3>Team Two Name</h3>
                <input onChange={this.handleTeamBName} />

                <button onClick={this.handleSubmitTeamB}>Finished</button>

            </>
        )
    }
}


export default TeamDetails;