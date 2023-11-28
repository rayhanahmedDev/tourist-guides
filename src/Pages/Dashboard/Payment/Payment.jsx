import { Elements } from "@stripe/react-stripe-js";
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from "./CheckoutForm ";

const stripePromise = loadStripe(import.meta.env.VITE_PK_STRIPE_KEY)
const Payment = () => {
    return (
        <div>
            <div>
               <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
               </Elements>
            </div>
        </div>
    );
};

export default Payment;