import React from "react";
import initial from "../../data/initial";
import store from "../../data/store";
import handleSetTeamA from "../../logic/setTeamA";
import handleSetTeamB from "../../logic/setTeamB";

class TeamDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            teamAName: store.getState().teamAName,
            teamBName: store.getState().teamBName,
        };

        this.handleTeamAName = this.handleTeamAName.bind(this);
        this.handleSubmitTeamA = this.handleSubmitTeamA.bind(this);

        this.handleTeamBName = this.handleTeamBName.bind(this);
        this.handleSubmitTeamB = this.handleSubmitTeamB.bind(this);

    }

    handleTeamAName = (e) => {
        let defaultTeamAName = "Team One";
        if (e.currentTarget.value === "") {
            this.setState({ teamAName: defaultTeamAName })
        } else {
            this.setState({ teamAName: e.currentTarget.value });
        }
    }

    handleSubmitTeamA = (e) => {
        e.preventDefault();
        this.setState({ teamAName: [...this.state.teamAName], teamAName: "" });
        handleSetTeamA("SET_TEAM_A_NAME", this.state.teamAName)
    }

    handleTeamBName = (e) => {
        let defaultTeamBName = "Team Two";
        if (e.currentTarget.value === "") {
            this.setState({ teamBName: defaultTeamBName })
        } else {
            this.setState({ teamBName: e.currentTarget.value });
        }
    }

    handleSubmitTeamB = (e) => {
        e.preventDefault();
        this.setState({ teamBName: [...this.state.teamBName], teamBName: "" });
        handleSetTeamB("SET_TEAM_B_NAME", this.state.teamBName)
    }

    render() {
        return (
            <>
                <h1>Set Team Names</h1>

                <h3>Team One Name</h3>
                <input
                    onChange={this.handleTeamAName}
                    defaultValue={this.state.teamAName}
                />

                <button onClick={this.handleSubmitTeamA}>Finished</button>

                <h3>Team Two Name</h3>
                <input
                    onChange={this.handleTeamBName}
                    defaultValue={this.state.teamBName}
                />

                <button onClick={this.handleSubmitTeamB}>Finished</button>

            </>
        )
    }
}


export default TeamDetails;