import React from 'react';
import {Route, Switch, Redirect} from "react-router";

import Header from './common/header/Header';
import {pathsConst} from "../consts";
import '../assets/css/index.css';
import Main from "./main/Main";
import Menu from "./common/menu/Menu";
import NewsLine from "./common/newsline/NewsLine";
import Materials from "./materials/Materials";
import Companies from "./companies/Companies";
import Logistic from "./logistic/Logistic";
import Contacts from "./contacts/Contacts";
import Footer from "./common/footer/Footer";
import LoginRegister from "./login/LoginRegister";
import {getInitState, getClientId, settings} from '../settings';
import axios from "axios";
// import UnderDevelopment from "./common/underDevelopment/UnderDevelopment";

import Tariff from './tariff/Tariff';
import Profile from './profile/Profile';
import OrderInfo from './order/OrderInfo';

getInitState();
axios.defaults.baseURL = settings.apiUrl;
getClientId();
// const isUnderDevelopment = settings.isUnderDevelopment;

function App() {
    return (
        <React.Fragment>
            <div className="application">
                {/* header */}
                <Header/>
                {/* menu */}
                <Menu/>
                {/* news */}
                <NewsLine/>
                <Switch>
                    {/*: "sign in"; history: History<any>; location: Location<any>; match: match<any>; staticContext?: StaticContext | undefined; }'*/}
                    {/*<Route exact path={ pathsConst.HOME } component={ Main } >*/}
                    {/*<Route path={`${pathsConst.HOME}/:action`} component={ LoginRegister }/>*/}
                    {/*</Route>*/}
                    {/*<Route exact path={pathsConst.UNDER_DEVELOPMENT} component={UnderDevelopment}/>*/}
                    {/*{isUnderDevelopment && <Redirect to={pathsConst.UNDER_DEVELOPMENT}/>}*/}
                    <Redirect exact from={pathsConst.MAIN} to={pathsConst.ROOT}/>
                    <Route exact path={pathsConst.ROOT} component={Main}/>
                    <Route exact path={pathsConst.LOGIN} component={LoginRegister}/>
                    <Route exact path={pathsConst.REGISTER} component={LoginRegister}/>
                    <Route path='/tariff' component={Tariff}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/order-info/:id' component={OrderInfo}/>
                    {/*<Route exact path={ pathsConst.LOGIN }  render={ (props) => <LoginRegister  {...props} initialView = {loginStatesConst.LOGIN_STATE} /> } />*/}
                    {/*<Route exact path={ pathsConst.REGISTER } render={ (props) => <LoginRegister {...props} initialView = {loginStatesConst.REGISTER_STATE} /> } />*/}
                    {/*<Route exact path={ pathsConst.SELLERS } component={ Sellers } />*/}
                    {/*<Route exact path={ pathsConst.BUYERS } component={ Buyers } />*/}
                    {/*<Route exact path={ pathsConst.MATERIALS } component={ Materials } />*/}
                    {/*<Route exact path={ pathsConst.COMPANIES } component={ Companies } />*/}
                    <Route exact path={pathsConst.COMPANY} component={Companies}/>
                    <Route exact path={pathsConst.PRODUCTS} component={Materials}/>
                    <Route exact path={pathsConst.LOGISTIC} component={Logistic}/>
                    <Route exact path={pathsConst.CONTACTS} component={Contacts}/>
                    <Redirect from="*" to={pathsConst.ROOT}/>
                </Switch>
            </div>
            {/* footer */}
            <Footer/>
        </React.Fragment>
    );
}

export default App;