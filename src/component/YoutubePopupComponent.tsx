import React from "react";
import YouTubePlayer from "react-player";
export interface YoutubePopupComponentProps {
    url:string,
    onClose:()=>void
}

const YoutubePopupComponent:React.FunctionComponent<YoutubePopupComponentProps> = (props:YoutubePopupComponentProps) => {
    return (
        <div 
            className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-gray-800 bg-opacity-50" 
            onClick={()=>props.onClose()}
        >
            <div className="bg-white p-5">
                <YouTubePlayer
                    url={props.url}
                />
            </div>
        </div>
    )
}

export default YoutubePopupComponent;