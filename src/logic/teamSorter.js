import store from "../data/store";

// This uses the Fisher-Price algorithm (just kidding, it's Fisher-Yates) to shuffle the names in the array
const shuffleArray = (inputArray) => {

    for (let i = inputArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = inputArray[i]
        inputArray[i] = inputArray[j]
        inputArray[j] = temp
    }

    return inputArray;
};

const teamSorter = () => {
    // Make a copy of the original array 
    let originalArray = store.getState().playersArray
    let inputArray = [...originalArray]

    console.log(inputArray)
    console.log(shuffleArray(inputArray))

    // let shuffleTeam = store.getState().playersArray



};

export default teamSorter;