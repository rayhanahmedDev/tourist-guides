import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import useBookings from "../../../Hooks/useBookings";


const CheckoutForm  = () => {
    const [error, setError] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [booking, refetch] = useBookings()
    const {user} = useAuth()

    const stripe = useStripe()
    const elements = useElements()
    const axiosSecure = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState('')

    const totalPrice = booking.reduce((total, item) => total + item.price, 0)


    useEffect(() => {
        if(totalPrice > 0){
            axiosSecure.post('/create-payment-intent',{ price: totalPrice})
        .then(res => {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
        })
        }
    },[axiosSecure, totalPrice])

    const handleSubmit = async (event) =>{
        event.preventDefault()

        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement);
        if(card === null){
            return
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type :'card',
            card
        })

        if(error){
            console.log('payment error', error);
            setError(error.message)
        }else{
            console.log('payment method', paymentMethod);
            setError('')
        }

        // confirm payment
        const {paymentIntent, error : confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card : card,
                billing_details : {
                    email : user?.email || 'anonymous',
                    name : user?.displayName || 'anonymous'
                }
            }
        })
        if(confirmError){
            console.log(confirmError, "confirm error");
        }else{
            console.log(paymentIntent, 'payment intent');
            if(paymentIntent.status === 'succeeded'){
                console.log('transactionId', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // now saved the data in the database
                const payment = {
                    email : user?.email,
                    price : totalPrice,
                    transactionId : paymentIntent.id,
                    date : new Date(),
                    cartIds : booking.map(item => item._id),
                    menuItemIds : booking.map(item => item.menuId)
                }

                const res = await axiosSecure.post('/payments', payment)
                console.log('payment saved', res.data);
                refetch()
                if(res.data?.paymentsResult?.insertedId){
                    
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Payment has been Successful",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            }
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-sm my-4 btn-primary" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className="text-red">{error}</p>
                {transactionId && <p className="text-green-600">Your Transaction id : {transactionId}</p>}
            </form>
        </div>
    );
};

export default CheckoutForm ;