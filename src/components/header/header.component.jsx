import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart-selectors';
import {selectCurrentUser} from '../../redux/user/user-selectors';

import './header.styles.scss';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { signOutStart } from '../../redux/user/user-actions';

const Header = ({currentUser, hidden, signOut}) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/shop">
                    CONTACT
                </Link>
                {
                    currentUser ?
                    <div className="option" onClick={ () => signOut()}>
                        SIGN OUT
                    </div> 
                    :
                    <Link className="option" to="/signin">SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {
                hidden ?
                null :
                <CartDropdown /> 
            }
            
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);