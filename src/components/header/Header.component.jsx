import React from 'react';
import {connect} from "react-redux";
import {ReactComponent as Logo} from './086 crown.svg';
import {auth} from '../../firebase/firebase.utils';
import CartDropdown from "../cart-dropdown/CartDropdown.component";

import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {selectCartHidden} from "../../redux/cart/cart.selectors";

import CartIcon from '../cart-icon/CartIcon.component';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionStyle} from './Header.styles';

const Header = ({currentUser, hidden}) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo style={{width: '100%', height: '100%'}}/>
            </LogoContainer>
            <OptionsContainer>
                <OptionStyle to='/shop'>SHOP</OptionStyle>
                <OptionStyle>CONTACTS</OptionStyle>
                {!currentUser
                    ?
                    <OptionStyle to='/signIn'>SIGN IN</OptionStyle>
                    :
                    <OptionStyle as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionStyle>
                }
                <CartIcon/>
            </OptionsContainer>
            {hidden ? null : <CartDropdown/>}
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
    //Здесь используется мемоизация при помощи библиотеки reselect
})

export default connect(mapStateToProps)(Header);
