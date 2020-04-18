import React  from 'react';
import {connect} from 'react-redux';
import {addCartItem, removeCartItem, clearItemFromCheckout} from '../../redux/cart/cart-actions'

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem, addItem, removeItem, clearItem}) => {
    const {imageUrl, name, price, quantity} = cartItem;
    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img alt='item' src={imageUrl} />
        </div>
        <span className='name'>{name}</span>
        <div className='quantity-container'>
            <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
            <span className='quantity'>{quantity}</span>
            <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
        </div>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
    </div>);
};

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addCartItem(item)),
    removeItem: (item) => dispatch(removeCartItem(item)),
    clearItem: (item) => dispatch(clearItemFromCheckout(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);