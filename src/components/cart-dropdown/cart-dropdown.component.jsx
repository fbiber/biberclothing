import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart-selectors';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {toggleCartDropdown} from '../../redux/cart/cart-actions';

const CartDropdown = ({items, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {
            items.length ?
            items.map((item) => <CartItem key={item.id} item={item}></CartItem>) :
            <span className='empty-cart'>You have no items in your cart</span>
        }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartDropdown());   
        }}>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector ({
    items: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));