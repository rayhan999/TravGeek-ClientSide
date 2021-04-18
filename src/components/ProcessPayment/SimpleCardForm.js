import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';

const SimpleCardForm = ({ handlePayment }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);
            handlePayment(paymentMethod.id)
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button type="submit" disabled={!stripe}>
                    Pay
            </button>
            </form>
            {
                paymentError &&
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Error!</strong> {paymentError}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            }
            {
                paymentSuccess &&
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Success!</strong> Your payment was successful
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            }
        </div>
    );
};

export default SimpleCardForm;