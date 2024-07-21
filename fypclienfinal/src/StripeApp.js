// });
import React, { useState } from "react";

import { useStripe } from "@stripe/react-stripe-js";

// ADD your server endpoint here
// const API_URL = "http://localhost:3000";

const StripeApp = () => {
  const [email, setEmail] = useState("");
  const [cardElement, setCardElement] = useState(null);
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();

  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch("/api/users/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const { clientSecret, error } = await response.json();
    return { clientSecret, error };
  };

  const handlePayPress = async () => {
    setLoading(true);

    try {
      const { clientSecret, error } = await fetchPaymentIntentClientSecret();

      if (error) {
        console.log("Unable to process payment");
        return;
      }

      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: cardElement,
            billing_details: { email },
          },
        });

      if (confirmError) {
        console.log("Payment Confirmation Error:", confirmError.message);
        alert(`Payment Confirmation Error: ${confirmError.message}`);
      } else {
        console.log("Payment Successful ", paymentIntent);
        alert("Payment Successful");
      }
    } catch (error) {
      console.log("Error:", error);
    }

    setLoading(false);
  };

  return (
    <div style={{ flex: 1, justifyContent: "center", margin: 20 }}>
      <input
        placeholder="E-mail"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          backgroundColor: "#efefef",
          borderRadius: 8,
          fontSize: 20,
          height: 50,
          padding: 10,
          marginBottom: 20,
        }}
      />
      <button onClick={handlePayPress} disabled={loading}>
        Pay
      </button>
    </div>
  );
};

export default StripeApp;
