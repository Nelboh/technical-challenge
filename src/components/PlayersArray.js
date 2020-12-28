import { Component } from "react";

import teamSorter from "../logic/teamSorter";
import store from "../data/store";

class PlayersArray extends Component {

    constructor(props) {
        super(props);

        this.state = {
            playersArray: [],
        };

        this.handleSubmitArray = this.handleSubmitArray.bind(this);
    }

    handleSubmitArray = (e) => {
        e.preventDefault();
        // this.props.handleGenerateTeams({ ...this.state }); // Will use this later when using own array of players from input fields
        teamSorter();
    }

    render() {

        let playersArray = store.getState().playersArray;

        return (
            <>
                <h2>List of players from Initial:</h2>
                <>
                    {playersArray.map((player, index) => (
                        <div key={index}>
                            <h3>Player {index + 1}</h3>
                            <p>{player}</p>
                        </div>
                    ))}
                </>

                <button type="submit" onClick={this.handleSubmitArray}>Generate Teams</button>
            </>

        )

    }


}

export default PlayersArray;