import React from "react";
import './App.css';
import HomePage from './pages/home-page/HomePage.component';
import ShopPage from './pages/shop-page/ShopPage.component';
import SignInPage from './pages/sign-In-page/SignInPage.component'
import {auth} from './firebase/firebase.utils';
import {createUserProfileData} from './firebase/firebase.utils';

import Header from './components/header/Header.component';

import {Route, Switch} from 'react-router-dom';
import {logDOM} from "@testing-library/react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileData(userAuth);
                userRef.onSnapshot(snapshot => {
                    this.setState({
                        'currentUser': {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    }, () => console.log(this.state))
                })
            } else {
                this.setState({'currentUser': userAuth})
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/signIn' component={SignInPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;
