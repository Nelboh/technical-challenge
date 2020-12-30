const PlayerInput = ({ players, playerName, handlePlayerName, label, handleAddToArray }) => (
    <>
        <h3>{label}</h3>
        <input
            type="text"
            label={label}
            placeholder="Add a player"
            playerName={playerName}
            onChange={handlePlayerName}
        />

    </>
)

export default PlayerInput;