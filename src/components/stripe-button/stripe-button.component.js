import React from "react";
import StripeCheckout from "react-stripe-checkout";
import Logo from "../../assets/crw.svg";

const StripeCheckoutButton = ({ price }) => {
  const stripePrice = price * 100; // convert to cents
  const myStripeKey = "pk_test_LzfVrN0QGGWDDzrZFTR25uN6003QWUZA3E";

  const getToken = token => {
    console.log(token);
    alert("Payment Successful.");
  };

  return (
    <StripeCheckout
      name="CRW Clothing Co."
      image={Logo}
      label="Pay Now"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={stripePrice}
      panelLabel="Pay Now"
      token={getToken}
      stripeKey={myStripeKey}
    />
  );
};

export default StripeCheckoutButton;
