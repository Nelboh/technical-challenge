const KitColourButton = ({ colourOption, kitClass, handleTeamColour, colour }) => (
    <>
        <button
            colourOption={colourOption}
            className={colour === { colourOption } ? "kitButton {kitClass} kitSelected" : "kitButton {kitClass}"}
            onClick={handleTeamColour}
        >{colourOption}</button>
    </>
)

export default KitColourButton;