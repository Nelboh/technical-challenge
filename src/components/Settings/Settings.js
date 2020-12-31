// import TeamDetails from "../TeamDetails/TeamDetails";
import Players from "../Players/Players";
import Team from "../Team/Team";
import SubmitTeams from "../SubmitTeams";

const Settings = () => (

    <section className="settingsPage">

        <Team team="0" />

        <Team team="1" />

        <SubmitTeams />

        {/* <TeamDetails /> */}

        <Players />

    </section>

)

export default Settings;