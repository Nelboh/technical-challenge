import store from "../data/store";

// This uses the Fisher-Price algorithm (just kidding, it's Fisher-Yates) to shuffle the names in the array
const shuffleArray = (array) => {

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }

    return array;

};

// This builds an action with the team in the payload
function setTeam(type, team) {
    return {
        type: type,
        payload: team,
    }
}

// This sets "team" in the store using the above action
function handleTeam(type, team) {
    store.dispatch(setTeam(type, team))
}

// This takes the array and splits it in half. In case of an odd number of players, TeamA will be larger.
const splitArray = (array) => {

    const half = Math.ceil(array.length / 2);

    const teamA = array.splice(0, half)
    const teamB = array.splice(-half)

    handleTeam("SET_TEAM_A", teamA)
    handleTeam("SET_TEAM_B", teamB)

}

const teamSorter = () => {
    // Make a copy of the original array 
    let originalArray = store.getState().players
    let inputArray = [...originalArray]

    let shuffledArray = shuffleArray(inputArray)

    splitArray(shuffledArray)
};

export default teamSorter;