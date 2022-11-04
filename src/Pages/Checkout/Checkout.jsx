import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Checkout = () => {
  const { user } = useContext(AuthContext);

  const { _id, title, price } = useLoaderData();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = `${form.firstName.value} ${form.lastName.value} `;
    const email = user?.email || "Unregisterd";
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      serviceId: _id,
      serviceName: title,
      customer: name,
      email,
      phone,
      message,
    };

    // ** send the order data to db

    const sendData = async () => {
      try {
        const response = await fetch(
          `https://genius-car-server-ruby.vercel.app/orders`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("geniusToken")}`,
            },
            body: JSON.stringify(order),
          }
        );

        const data = await response.json();

        if (data.acknowledged) {
          alert("Your order has been placed");
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    sendData();
  };

  return (
    <div>
      <h1>Title: {title}</h1>
      <p>Price: ${price}</p>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            className="input  input-bordered input-primary w-full max-w-xs"
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            readOnly
            defaultValue={user?.email}
            name="email"
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            name="phone"
            type="text"
            placeholder="Your Phone"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <textarea
          name="message"
          className="textarea w-full textarea-primary"
          placeholder="Your Message"
        ></textarea>
        <input className="btn" type="submit" value="Place Your Order" />
      </form>
    </div>
  );
};

export default Checkout;
