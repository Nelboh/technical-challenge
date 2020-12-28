// import store from "../../data/store";
import Settings from "../Settings/Settings";
import PlayersArray from "../PlayersArray";

const App = () => (
  <>
    <header>
      <h1 className="title">5-a-side<br />Team Generator</h1>
    </header>

    <main>

      <Settings />

      <PlayersArray />

    </main>

    <footer>
      <h2 className="footerText">© 2020 Ellie Hobbs</h2>
    </footer>

  </>

);

export default App;
