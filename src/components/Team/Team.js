import React from "react";
import store from "../../data/store";

import compareTeamColours from "../../logic/compareTeamColours";
import teamColourUpdater from "../../logic/teamColourUpdater";
import teamNameUpdater from "../../logic/teamNameUpdater";


class Team extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: store.getState().teamSettings[this.props.team].details.name,

            colour: store.getState().teamSettings[this.props.team].details.colour,
        }

        this.handleTeamName = this.handleTeamName.bind(this);
        this.handleTeamColour = this.handleTeamColour.bind(this);
    }

    handleTeamName = (e) => {

        if (e.currentTarget.value === "") {
            this.setState({ name: this.props.defaultTeamName })
        } else {
            this.setState({ name: e.currentTarget.value });
        }
        teamNameUpdater(this.props.team, e.currentTarget.value);
    }

    handleTeamColour = (e) => {

        this.setState({ colour: e.currentTarget.value });

        if (compareTeamColours(this.props.team, e.currentTarget.value)) {

            // console.log("Not the same!")

            this.setState({ colour: e.currentTarget.value });
            teamColourUpdater(this.props.team, e.currentTarget.value);

        } else {
            console.log("Is the same!") // stick an error message in here
        }
    }

    render() {

        return (
            <>

                <h3>{this.props.defaultTeamName} Name</h3>
                <input
                    onChange={this.handleTeamName}
                    defaultValue={this.state.name}
                />

                <section>
                    <h3>Kit Colour</h3>
                    <div className="kitButtonHolder">
                        <button
                            value="1"
                            className={this.state.colour === "1" ? "kitButton kit1 kitSelected" : "kitButton kit1"}
                            onClick={this.handleTeamColour}
                        />

                        <button
                            value="2"
                            className={this.state.colour === "2" ? "kitButton kit2 kitSelected" : "kitButton kit2"}
                            onClick={this.handleTeamColour}
                        />

                        <button
                            value="3"
                            className={this.state.colour === "3" ? "kitButton kit3 kitSelected" : "kitButton kit3"}
                            onClick={this.handleTeamColour}
                        />

                        <button
                            value="4"
                            className={this.state.colour === "4" ? "kitButton kit4 kitSelected" : "kitButton kit4"}
                            onClick={this.handleTeamColour}
                        />

                        <button
                            value="5"
                            className={this.state.colour === "5" ? "kitButton kit5 kitSelected" : "kitButton kit5"}
                            onClick={this.handleTeamColour}
                        />

                    </div>
                </section>

            </>
        )
    }
}

export default Team;