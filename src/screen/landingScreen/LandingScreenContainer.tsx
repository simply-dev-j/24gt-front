import LandingScreen from "./LandingScreen";
import {connect} from "react-redux";
import {RootState} from "../../store/store"
import CalendarContactModel from "../../model/CalendarContact.model";
import {ACTION_API_CONTACT_FORM_SUBMIT} from "../../store/thunk/contactFormThunk";

const mapStateToProps = (state:RootState) => {
    return {
        requestCalendarSuccessed:state.app.requestCalendarSuccessed
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        submitContactForm: (contactForm:CalendarContactModel) => {
            dispatch(ACTION_API_CONTACT_FORM_SUBMIT(contactForm));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingScreen);