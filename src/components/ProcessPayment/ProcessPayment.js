import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
// import SplitCardForm from './SplitCardForm';

const stripePromise = loadStripe('pk_test_51IhHpnJP2LH8iQtQsqLx4i9CYn3xOUnFyM9y2mRX3sxyTcPfQbeAyRg8rnqwbgn3J2wGVi3JB6EaZMAqqqaCm6b400b5UVe5NH');

const ProcessPayment = ({ handlePayment }) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment} ></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;