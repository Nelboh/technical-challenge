import React from "react";
import initial from "../../data/initial";
import store from "../../data/store";
import KitColourButton from "../KitColourButton";

class Team extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: store.getState().teamSettings[this.props.team].details.name,

            colour: store.getState().teamSettings[this.props.team].details.colour,
        }

        this.handleTeamName = this.handleTeamName.bind(this);
    }

    handleTeamName = (e) => {

        if (e.currentTarget.value === "") {
            this.setState({ name: this.props.defaultTeamName })
        } else {
            this.setState({ name: e.currentTarget.value });
        }
    }

    handleTeamColour = (e) => {
        this.setState({ colour: e.target.value });
    }

    render() {

        return (
            <>

                <h3>{this.props.defaultTeamName} Name</h3>
                <input
                    onChange={this.handleTeamName}
                    defaultValue={this.state.name}
                />

                <div>
                    <h3>Kit Colour</h3>
                    <KitColourButton
                        colourOption="1"
                        kitClass="kit1"
                        handleTeamColour={this.handleTeamColour}
                        colour={this.state.colour}
                    />

                    <KitColourButton
                        colourOption="2"
                        kitClass="kit2"
                        handleTeamColour={this.handleTeamColour}
                        colour={this.state.colour}
                    />

                    <KitColourButton
                        colourOption="3"
                        kitClass="kit3"
                        handleTeamColour={this.handleTeamColour}
                        colour={this.state.colour}
                    />

                    <KitColourButton
                        colourOption="4"
                        kitClass="kit5"
                        handleTeamColour={this.handleTeamColour}
                        colour={this.state.colour}
                    />

                    <KitColourButton
                        colourOption="5"
                        kitClass="kit5"
                        handleTeamColour={this.handleTeamColour}
                        colour={this.state.colour}
                    />

                </div>

            </>
        )
    }
}

export default Team;