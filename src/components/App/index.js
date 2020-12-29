import App from "./App";
import { connect } from "react-redux";

const mapStateToProps = (state) => {

    return {
        settingsCompleteProp: state.settingsComplete,
    }
}

export default connect(mapStateToProps)(App); // wraps the component with mapStateToProps