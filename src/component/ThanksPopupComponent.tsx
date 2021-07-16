import React from "react";
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
                    Vielen Dank für Ihre Bestellung.<br/>
                    Wir werden Ihnen diese schnellstmöglich zusenden.
                </div>
                <div className="mt-5 flex">
                    <button className="text-18 font-extrabold text-white px-42p py-2 rounded bg-secondary mx-auto sm:w-full"
                        onClick={() => props.onClose()}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ThanksPopupComponent;