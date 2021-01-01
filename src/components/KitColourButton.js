const KitColourButton = ({ colourOption, kitClass, handleTeamColour, colour }) => (
    <>
        {console.log(colour)}
        {console.log(colourOption)}
        <button
            //colourOption={colourOption}
            // className={colour === { colourOption }
            //     ? "kitButton kitSelected " + kitClass
            //     : "kitButton " + kitClass}

            style={{ colour } === { colourOption }
                ? { color: "green" }
                : { color: "red" }}

            onClick={handleTeamColour}
        >{colourOption}</button>
    </>
)

export default KitColourButton;


