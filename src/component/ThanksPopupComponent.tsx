import React from "react";
import { useTranslation, Trans } from 'react-i18next';

export interface ThanksPopupComponentProps {
    onClose:()=>void
}

const ThanksPopupComponent:React.FunctionComponent<ThanksPopupComponentProps> = (props:ThanksPopupComponentProps) => {
    return (
        <div 
            className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-gray-800 bg-opacity-50" 
            onClick={()=>props.onClose()}
        >
            <div className="bg-white px-5 py-10 w-470p sm:w-10/12 rounded">
                <div className="font-semibold sm:text-18p sm:leading-24p ">
                    <Trans
                        i18nKey="landing.thanks_message"
                        components={{ br: <br /> }}
                    />
                </div>
                <div className="mt-5 flex">
                    <button className="text-18 font-extrabold text-white px-42p py-2 rounded bg-secondary mx-auto sm:w-full"
                        onClick={() => props.onClose()}>
                        <Trans
                            i18nKey="landing.close"
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ThanksPopupComponent;