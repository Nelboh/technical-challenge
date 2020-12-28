import React from "react";

class AddPlayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };

        // This.bind goes here

    }

    // HandleXs go here

    render() {
        // any let statements go here
        return (
            <>
                <div className="listInputs">
                    <input
                        type="text"
                        placeholder="Add a player"
                    // onChange={ }

                    />
                    <button
                        className="pillButton"
                        type="submit"
                    // onClick={ }
                    >Add Player</button>
                </div>



                <button
                    className="pillButton"
                    type="submit"
                // onClick={ }
                >Generate Teams</button>
            </>

        );

    }
}

export default AddPlayer;