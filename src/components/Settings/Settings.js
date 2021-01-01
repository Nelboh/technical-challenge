import TeamsForm from "../TeamsForm";
import Players from "../Players/Players";

const Settings = () => (

    <section className="settingsPage">

        <article className="card">
            <h2 className="cardTop">Team Settings</h2>
            <TeamsForm />
            <div className="cardBottom"></div>
        </article>

        <article className="card">
            <Players />
        </article>

    </section>

)

export default Settings;