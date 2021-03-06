import React from "react";
import store from "../../data/store";

// Logic files
import compareTeamColours from "../../logic/compareTeamColours";
import compareTeamNames from "../../logic/compareTeamNames";
import teamColourUpdater from "../../logic/teamColourUpdater";
import teamNameUpdater from "../../logic/teamNameUpdater";


class Team extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            // These fetch the name and colour from store state, accessed via their index (0 or 1)
            name: store.getState().teamSettings[this.props.team].details.name,
            colour: store.getState().teamSettings[this.props.team].details.colour,

            // These help with validating the inputs, for duplicate names or fields that haven't been filled out
            colourClash: false,
            nameClash: false,
            nameEmpty: false,
        }

        this.handleTeamName = this.handleTeamName.bind(this);
        this.handleTeamColour = this.handleTeamColour.bind(this);
    }

    // This updates the input name for each team
    handleTeamName = (e) => {

        let teamName = e.currentTarget.value;

        // If the input is left empty, it triggers nameEmpty = true, which renders a warning message
        // It also sets a default team name if nameEmpty = true
        if (e.currentTarget.value === "") {
            teamName = this.props.defaultTeamName;
            this.setState({ nameEmpty: true });
            this.setState({ name: this.props.defaultTeamName })
        } else {

            // If nameEmpty = false, it checks if Team 1 and 2 have the same names (nameClash = true)
            // If they do, a warning message is rendered
            this.setState({ nameEmpty: false });
            this.setState({ nameClash: false });
            if (compareTeamNames(this.props.team, e.currentTarget.value)) {
                this.setState({ nameClash: false });

                this.setState({ name: e.currentTarget.value });

                teamNameUpdater(this.props.team, e.currentTarget.value);

            } else {
                this.setState({ nameClash: true });
                this.setState({ name: e.currentTarget.value });
            }
        }
        // This truncates an input team name to be a maximum of 16 characters long, plus an ellipsis
        if (teamName.length > 16) {
            teamName = teamName.slice(0, 16) + "...";
        }

        teamNameUpdater(this.props.team, teamName);

    }

    // This updates the chosen team colour for each team
    // If team colours are the same (colourClash = true), a warning message is rendered
    handleTeamColour = (e) => {

        this.setState({ colour: e.currentTarget.value });

        if (compareTeamColours(this.props.team, e.currentTarget.value)) {

            this.setState({ colourClash: false });

            this.setState({ colour: e.currentTarget.value });
            teamColourUpdater(this.props.team, e.currentTarget.value);

        } else {
            this.setState({ colourClash: true });
        }
    }

    render() {

        let colourClash = this.state.colourClash;
        let nameClash = this.state.nameClash;
        let nameEmpty = this.state.nameEmpty;

        return (
            <>

                <label className="headerLabel" htmlFor="team name">{this.props.defaultTeamName} Name</label>

                {/* This changes the class name for each error message, adjusting the styling to show or hide said message depending on the conditions met */}
                <p className={nameEmpty ? "errorMessage" : "errorMessageHidden"}>Please enter a name</p>
                <p className={nameClash ? "errorMessage" : "errorMessageHidden"}>Team names must be different</p>

                <input
                    onChange={this.handleTeamName}
                    defaultValue={this.state.name}
                    name="team name"
                />

                <section className="kitColourSpacer">
                    <h3>{this.props.defaultTeamName} Kit Colour</h3>

                    {/* This is another error message with styling that changes depending on conditions met */}
                    <p className={colourClash ? "errorMessage" : "errorMessageHidden"}> Teams must have different kit colours</p>

                    <div className="kitButtonHolder">

                        {/* These could be refactored to be a single component with props */}
                        <button
                            value="1"
                            className={this.state.colour === "1" ? "kitButton kit1 kitSelected" : "kitButton kit1"}
                            onClick={this.handleTeamColour}
                            aria-label="Blue"
                        />

                        <button
                            value="2"
                            className={this.state.colour === "2" ? "kitButton kit2 kitSelected" : "kitButton kit2"}
                            onClick={this.handleTeamColour}
                            aria-label="Green"
                        />

                        <button
                            value="3"
                            className={this.state.colour === "3" ? "kitButton kit3 kitSelected" : "kitButton kit3"}
                            onClick={this.handleTeamColour}
                            aria-label="Yellow"
                        />

                        <button
                            value="4"
                            className={this.state.colour === "4" ? "kitButton kit4 kitSelected" : "kitButton kit4"}
                            onClick={this.handleTeamColour}
                            aria-label="Red"
                        />

                        <button
                            value="5"
                            className={this.state.colour === "5" ? "kitButton kit5 kitSelected" : "kitButton kit5"}
                            onClick={this.handleTeamColour}
                            aria-label="Pink"
                        />

                    </div>
                </section>

            </>
        )
    }
}

export default Team;