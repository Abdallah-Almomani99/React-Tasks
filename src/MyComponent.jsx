import React, { useState } from "react";

const MyComponent = () => {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState(false);

  function handleQuantityChange(e) {
    setQuantity(e.target.value);
  }

  function handleNameChange(e) {
    setQuantity(e.target.value);
  }

  function handlePaymentChange(e) {
    setPayment(e.target.value);
  }

  function handleShippingChange(e) {
    setShipping(e.target.value);
  }
  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Hello {name}</p>

      <input type="number" value={quantity} onChange={handleQuantityChange} />
      <p>Quantity : {quantity}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="" defaultChecked>
          Select an Option
        </option>
        <option value="cash">Cash</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="GiftCard">GiftCard</option>
      </select>
      <p>Payment : {payment}</p>

      <label>
        pick up
        <input
          type="radio"
          value={"pick up"}
          checked={shipping === "pick up"}
          onChange={handleShippingChange}
        />
      </label>

      <label>
        delivery
        <input
          type="radio"
          value={"delivery"}
          checked={shipping === "delivery"}
          onChange={handleShippingChange}
        />
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  );
};

export default MyComponent;
