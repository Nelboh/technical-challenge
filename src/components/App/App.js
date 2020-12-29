import store from "../../data/store";

import { Component } from "react";

import Settings from "../Settings/Settings";
import PlayersArray from "../PlayersArray";
import Lists from "../Lists/Lists";



const App = ({ settingsComplete }) => (
  <>
    <header>
      <h1 className="title">5-a-side<br />Team Generator</h1>
    </header>

    <main>

      {/* {
        !settingsComplete ? (

          <PlayersArray />

        ) : (

            <Lists />

          )

      } */}

      <PlayersArray />

      <Lists />

      <Settings />


    </main>

    <footer>
      <h2 className="footerText">© 2020 Ellie Hobbs</h2>
    </footer>

  </>

);

export default App;
