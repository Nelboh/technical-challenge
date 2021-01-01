import TeamsForm from "../TeamsForm";
import Players from "../Players/Players";

const Settings = () => (

    <section>

        <section className="cardHolder">
            <header className="cardTop">
                <h2>Team Settings</h2>
            </header>

            <div className="cardGreen">
                <TeamsForm />
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