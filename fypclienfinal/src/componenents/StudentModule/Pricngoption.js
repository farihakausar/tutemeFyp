import React, { useState, useEffect } from "react";
import { FaDesktop, FaMoneyBill, FaUserGraduate } from "react-icons/fa";
import moneyImg from "../../assests/money.jpg";
import Header from "../Header";
import axios from "axios";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
export default function Payment() {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const { userId, teacherId, price } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data } = await axios.post(
        `/api/users/create-payment-intent/${userId}/${teacherId}/${price}`,
        {
          amount: price, // Amount in cents
        }
      );

      const { clientSecret } = data;
      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (paymentResult.error) {
        setError(paymentResult.error.message);
      } else {
        console.log(paymentResult);
        navigate(`/homeclass/${teacherId}`);
        // navigate({`/homeclass/${teacherId}`});
        // Payment successful, handle success
      }
    } catch (error) {
      setError("Error processing payment");
    }

    setLoading(false);
  };

  return (
    <>
      <Header />
      <div className="p-12 flex flex-col md:flex-row items-center">
        {/* Left Section with Image */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src={moneyImg}
            alt="Money"
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>

        {/* Right Section with Pricing Options */}
        <div className="md:w-1/2 md:ml-6">
          <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-6">
            Payment
          </h2>
          <div className="bg-white flex flex-col w-full md:py-8">
            <button className="text-white bg-indigo-500 border-0 m-3 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              <a className="flex items-center text-white">
                <FaMoneyBill className="mr-2 " /> Add details
              </a>
            </button>

            <CardElement className="border-2 border-customBlue p-4 rounded-l-lg" />
            <button type="submit" disabled={!stripe || loading}>
              {loading ? "Processing..." : "Pay"}
              <button
                onClick={handleSubmit}
                className="text-white bg-indigo-500 border-0 m-3 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                <a
                  href={`/homeclass/${teacherId}`}
                  className="flex items-center text-white"
                >
                  Done
                </a>
              </button>
            </button>
            {/* {error && <div>{error}</div>} */}
            {/*   
          <button className="text-white bg-indigo-500 border-0 m-3 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            <a href="/cash" className="flex items-center text-white">
              <FaMoneyBill className="mr-2 " />
              Cash
            </a>
          </button>
          */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
