import Team from "../Team/Team";
import Players from "../Players/Players";

// This component renders two instances of the Team component, with different props (index 0 and 1) to determine which team it is

const Settings = () => (

    <section>

        <section className="cardHolder">
            <header className="cardTop">
                <h2>Team Settings</h2>
            </header>

            <div className="cardGreen">
                <Team team={0} defaultTeamName="Team One" />

                <div className="teamsDivider" />

                <Team team={1} defaultTeamName="Team Two" />
            </div>

            <footer className="cardBottom"></footer>
        </section>

        <section className="cardHolder">

            <header className="cardTop">
                <h2>Enter players</h2>
            </header>

            <div>
                <Players />
            </div>

        </section>

    </section>

)

export default Settings;