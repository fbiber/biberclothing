import React from 'react';
import './cart-icon.styles.scss';
import {ReactComponent as ShoppingBag} from '../../assets/shoppingbag.svg'
import {connect} from 'react-redux';
import {toggleCartDropdown} from '../../redux/cart/cart-actions';
import {selectCartItemsCount} from '../../redux/cart/cart-selectors';

const CartIcon = ({toggleCartDropdown, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartDropdown}>
        <ShoppingBag className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = (dispatch) => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);