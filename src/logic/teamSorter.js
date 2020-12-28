import store from "../data/store";

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
    let inputArray = store.getState().playersArray
    console.log(inputArray)
    console.log(shuffleArray(inputArray))

    // let shuffleTeam = store.getState().playersArray



};

export default teamSorter;