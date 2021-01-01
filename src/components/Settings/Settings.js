import TeamsForm from "../TeamsForm";
import Players from "../Players/Players";

const Settings = () => (

    <section className="settingsPage">

        <h2>Team Settings</h2>

        <article className="card">
            <TeamsForm />
        </article>

        <article className="card">
            <Players />
        </article>

    </section>

)

export default Settings;