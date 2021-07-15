import {connect} from "react-redux";
import AppScreen from "./AppScreen";
import {RootState} from "../store/store"

const mapStateToProps = (state:RootState) => {
    return {
        busy:state.app.busy
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppScreen);