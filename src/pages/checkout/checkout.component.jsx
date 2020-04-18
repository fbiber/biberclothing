import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectItemsTotal} from '../../redux/cart/cart-selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const CheckoutPage = ({items, total}) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    Product
                </div>
                <div className='header-block'>
                    Description
                </div>
                <div className='header-block'>
                    Quantity
                </div>
                <div className='header-block'>
                    Price
                </div>
                <div className='header-block'>
                    Remove
                </div>
            </div>
            {
                items.map (
                    item => 
                    <CheckoutItem key={item.id} cartItem={item}></CheckoutItem>
                )
            }
            <div className='total'>
                TOTAL: ${total}
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    items: selectCartItems,
    total: selectItemsTotal
})

export default connect(mapStateToProps)(CheckoutPage);