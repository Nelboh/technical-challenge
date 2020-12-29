// import store from "../../data/store";

// import { Component } from "react";

// import Settings from "../Settings/Settings";
import PlayersArray from "../PlayersArray";
import Lists from "../Lists/Lists";



const App = ({ settingsCompleteProp }) => (
  // constructor(props) {
  //   super(props);

  //   this.state = {

  //     showLists: false,

  //   };

  //   console.log(props);

  // }


  //   componentDidUpdate(prevProps) {
  //     if (this.props.settingsCompleteProp === true) {
  //   this.setState({ showLists: true });
  // } else {
  //   this.setState({ showLists: false });
  // }
  //   }


  // render() {
  //   // let showLists = this.state;


  //   return (
  <>
    <header>
      <h1 className="title">5-a-side<br />Team Generator</h1>
    </header>

    <main>

      {
        // !this.state.showLists ? (
        !settingsCompleteProp ? (

          <PlayersArray />

        ) : (

            <Lists />

          )

      }

      {/* <PlayersArray />

          <Lists /> */}

      {/* <Settings /> */}


    </main>

    <footer>
      <h2 className="footerText">© 2020 Ellie Hobbs</h2>
    </footer>

  </>
)
//   }
// };


export default App;
