import * as keys from "../keys.json";
import {GoogleSpreadsheet} from "google-spreadsheet";
import CalendarContactModel from "../model/CalendarContact.model";
import env from "react-dotenv";

export default class SheetUtil {

    private static doc:any = null;
    private static sheet:any = null;

    public static authorize = async ():Promise<any> => {
        // Init sheet.
        const doc = new GoogleSpreadsheet(env.GOOGLE_SHEET_ID);

        await doc.useServiceAccountAuth({
            client_email: keys.client_email,
            private_key: keys.private_key,
        })
        try{
            await doc.loadInfo(); // loads document properties and worksheets
            console.log(doc.title); 
            
        } catch(error) {
            console.log(error)
            return Promise.reject();
        }

        try{
            const sheet = doc.sheetsById[0];
            SheetUtil.doc = doc;
            SheetUtil.sheet = sheet;
        } catch(error) {
            return Promise.reject();
        }
    }

    public static submitContactForm = async (contactForm:CalendarContactModel):Promise<any> => {
        if(SheetUtil.doc==null || SheetUtil.sheet==null) {
            const result = await SheetUtil.authorize();
            
        }
        const larryRow = await SheetUtil.sheet.addRow({
            company: contactForm.company,
            firstName: contactForm.firstName,
            lastName: contactForm.lastName,
            address: contactForm.address,
            city: contactForm.city,
            PLZ: contactForm.plz,
            land: contactForm.land,
            telephone: contactForm.telephone,
            email: contactForm.email
        })
        console.log(larryRow)
    }
}
