import React from "react";
import {Redirect, Route, Switch, useLocation, useRouteMatch} from "react-router-dom";
import LandingScreenContainer from "./landingScreen/LandingScreenContainer";
import Routes from "../constant/Route";
import WaitingComponent from "../component/WaitingComponent";

export interface AppScreenProps {
    busy:boolean
}   

const AppScreen:React.FunctionComponent<AppScreenProps> = (props:AppScreenProps) => {
    return (
        <div className="max-w-1920p mx-auto">
            <Switch>
                <Route path={Routes.landingPage} exact component={LandingScreenContainer}></Route>
                <Route path="*">
                    <Redirect to={Routes.landingPage} />
                </Route>
            </Switch>
            {
                props.busy ? (
                    <WaitingComponent/>
                ) : null
            }
            
        </div>
    )
} 

export default AppScreen;