import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectItemsTotal} from '../../redux/cart/cart-selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripePaymentButton from '../../components/stripe-button/stripe-button.component';

import './checkout.styles.scss';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

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
            <div className='test-warning'>
                *Please use the following test credit card for payment
                <br />
                4242 4242 4242 4242 - Exp: 04/20 CVV: 123
            </div>
            <StripeCheckoutButton price={total}/>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    items: selectCartItems,
    total: selectItemsTotal
})

export default connect(mapStateToProps)(CheckoutPage);