import { Component } from "react";
import initial from "../../data/initial";
import store from "../../data/store";


class Players extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playerName: "",
            existingPlayers: store.getState().players,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (index, e) => {
        console.log(e.currentTarget.value);
        console.log(index);
        let newPlayers = [];
        let x = this.state.existingPlayers.length;
        console.log(x);
        let i;
        for (i = 0; i < this.state.existingPlayers.length; i += 1) {

            console.log(this.state.existingPlayers[i])
            if (i === index) {
                newPlayers.push(e.currentTarget.value)
            } else {
                newPlayers.push(this.state.existingPlayers[i])
            }
        }
        console.log(this.state.existingPlayers);
        console.log(newPlayers)

        this.setState({ existingPlayers: newPlayers });
    }

    render() {

        // this.setState({ existingPlayers: store.getState().players })

        // let existingPlayers = store.getState().players;

        return (
            <>

                <p>Hello!</p>

                <>

                    {this.state.existingPlayers.map((player, index) => (
                        <div key={index}>
                            <h3>Player {index + 1}</h3>

                            <input
                                defaultValue={player}
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