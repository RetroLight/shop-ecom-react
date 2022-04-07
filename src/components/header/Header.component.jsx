import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {ReactComponent as Logo} from './086 crown.svg';
import {auth} from '../../firebase/firebase.utils';
import './Header.styles.scss';
import CartDropdown from "../cart-dropdown/CartDropdown.component";

import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {selectCartHidden} from "../../redux/cart/cart.selectors";

import CartIcon from '../cart-icon/CartIcon.component';

const Header = ({currentUser, hidden}) => {
    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo style={{width: '100%', height: '100%'}}/>
            </Link>
            <div className='options'>
                <Link to='/shop' className='option'>SHOP</Link>
                <Link className='option'>CONTACTS</Link>
                {!currentUser
                    ?
                    <Link className='option' to='/signIn'>SIGN IN</Link>
                    :
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                }
                <CartIcon/>
            </div>
            {hidden ? null : <CartDropdown/>}
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
    //Здесь используется мемоизация при помощи библиотеки reselect
})

export default connect(mapStateToProps)(Header);
