import Settings from "../Settings/Settings";
import Lists from "../Lists/Lists";

// SettingsCompleteProp comes from the App>index file. 
// SettingsComplete is set to true when the submit button in Settings > Players is clicked
const App = ({ settingsCompleteProp }) => (

  <>
    <header>
      <h1 className="title">5-a-side<br />Team Generator</h1>
    </header>

    <main>

      {
        !settingsCompleteProp ? (

          <Settings />

        ) : (

            <Lists />

          )
      }

    </main>

    <footer>
      <h2 className="h3alternate">© 2020 Ellie Hobbs</h2>
    </footer>
  </>
)

export default App;
