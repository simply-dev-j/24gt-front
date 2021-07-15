import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

export interface WaitingComponentProps {

}

const WaitingComponent:React.FunctionComponent<WaitingComponentProps> = (props:WaitingComponentProps) => {
    return (
        <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
            <div >
                <ClipLoader color={'bg-yellow-500'} loading={true} size={150}/>
            </div>
        </div>
    )
}

export default WaitingComponent;
