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

const splitArray = (array) => {

    const half = Math.ceil(array.length / 2);

    const TeamA = array.splice(0, half)
    const TeamB = array.splice(-half)
    console.log(TeamA)
    console.log(TeamB)

}


const teamSorter = () => {
    // Make a copy of the original array 
    let originalArray = store.getState().playersArray
    let inputArray = [...originalArray]

    let shuffledArray = shuffleArray(inputArray)
    console.log(shuffledArray)
    splitArray(shuffledArray)
};

export default teamSorter;