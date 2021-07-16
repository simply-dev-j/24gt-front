import store, {AppThunk} from "../store";
import SheetUtil from "../../util/Sheet.util";
import CalendarContactModel from "../../model/CalendarContact.model";
import {AppStateReducerSlice} from "../reducer/appStateReducerSlice";

export const ACTION_API_CONTACT_FORM_SUBMIT = (
    contactForm:CalendarContactModel
):AppThunk => async dispatch => {
    dispatch(AppStateReducerSlice.actions.ACTION_API_SUBMIT_CONTACT_started({}));

    await SheetUtil.submitContactForm(contactForm)
    .then(
        result => {
            dispatch(AppStateReducerSlice.actions.ACTION_API_SUBMIT_CONTACT_success({}));
        },
        error => {
            dispatch(AppStateReducerSlice.actions.ACTION_API_SUBMIT_CONTACT_failed({}));
        }
    )
    .finally(
        () => {
            dispatch(AppStateReducerSlice.actions.ACTION_API_SUBMIT_CONTACT_ended({}));
        }
    )
}