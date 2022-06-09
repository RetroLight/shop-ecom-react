import React from "react";
import './App.css';

import Header from './components/header/Header.component';

import HomePage from './pages/home-page/HomePage.component';
import ShopPage from './pages/shop-page/ShopPage.component';
import SignInPage from './pages/sign-In-page/SignInPage.component'
import CheckoutPage from "./pages/checkout-page/CheckoutPage.component";

import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/user.selectors";

import {checkUserSession} from "./redux/user/user.actions";

import {Route, Switch, Redirect} from 'react-router-dom';

import {connect} from "react-redux";

class App extends React.Component {

    unsubscribeFromAuth = null;

    componentDidMount() {
        const {checkUserSession} = this.props;
        checkUserSession()
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route exact path='/checkout' component={CheckoutPage}/>
                    <Route exact path='/signIn'
                           render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInPage/>)}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
    //Здесь используется мемоизация при помощи библиотеки reselect
});


const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
