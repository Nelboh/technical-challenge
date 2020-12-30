import Settings from "../Settings/Settings";
// import PlayersArray from "../PlayersArray";
import Lists from "../Lists/Lists";

const App = ({ settingsCompleteProp }) => (

  <>
    <header>
      <h1 className="title">5-a-side<br />Team Generator</h1>
    </header>

    <main>

      {
        // !this.state.showLists ? (
        !settingsCompleteProp ? (

          // <PlayersArray />
          <Settings />

        ) : (

            <Lists />

          )

      }

      {/* <PlayersArray />

          <Lists /> */}




    </main>

    <footer>
      <h2 className="footerText">© 2020 Ellie Hobbs</h2>
    </footer>

  </>
)
//   }
// };


export default App;
