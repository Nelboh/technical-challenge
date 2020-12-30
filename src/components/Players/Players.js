import { Component } from "react";
import initial from "../../data/initial";
import store from "../../data/store";


class Players extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playerName: "",
            existingPlayers: [],
            newPlayers: [],

        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (index, e) => {
        console.log(e.currentTarget.value);
        console.log(index);
        this.setState({ playerName: e.currentTarget.value });
    }

    render() {

        let existingPlayers = store.getState().playersArray;



        return (
            <>

                <p>Hello!</p>

                <>

                    {existingPlayers.map((existingPlayer, index) => (
                        <div key={index}>
                            <h3>Player {index + 1}</h3>

                            <input
                                defaultValue={existingPlayer}
                                index={index}
                                onBlur={this.handleChange.bind(this, index)}
                            ></input>
                        </div>
                    ))}
                </>

            </>
        )
    }
}

export default Players;