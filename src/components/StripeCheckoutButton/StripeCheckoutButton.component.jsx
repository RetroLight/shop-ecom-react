import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {

    const stripePrice = price * 100
    const publishableKey = 'pk_test_51KptVIKZ0vmO7sInYv5LXGKTMoHseY7fevR9PvF8mjMQp1Et6uN5nEa0IukCBfPMv2FwtULs7mL5ZVyNQvnhXqcN00pSTTBl2F'

    const onToken = (token) => {
        console.log(token)
        alert('Payment succeeded')
    }
    return(
        <StripeCheckout
            label='Pay now'
            name='E-Com Shop'
            billingAddress
            shippingAddress
            image='https://https://svgshare.com/i/CUz.svg'
            description={`Your price is $${price}`}
            amount={stripePrice}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
