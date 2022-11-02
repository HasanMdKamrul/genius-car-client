import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import OrdersRow from "./OrdersRow";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AuthContext);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this order"
    );
    if (proceed) {
      fetch(`http://localhost:15000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = orders.filter((odr) => odr._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  const handleApproveStatus = (id) => {
    const dataUpdate = async () => {
      try {
        const response = await fetch(`http://localhost:15000/orders/${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ status: "Approved" }),
        });
        const data = await response.json();
        if (data.modifiedCount > 0) {
          console.log(data);
          const remaining = orders.filter((odr) => odr._id !== id);
          const approving = orders.find((odr) => odr._id === id);
          // ** This is for UI
          approving.status = "Approved";

          const newOrders = [approving, ...remaining];
          setOrders(newOrders);
        }
      } catch (error) {
        console.log(error);
      }
    };
    dataUpdate();
  };

  useEffect(() => {
    // ** data load

    const loadData = async () => {
      try {
        const response = await fetch(
          `http://localhost:15000/orders?email=${user?.email}`
        );
        const data = await response.json();
        console.log(data);
        setOrders(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, [user?.email]);

  return (
    <div>
      <h1>Total orders : {orders.length}</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrdersRow
                handleApproveStatus={handleApproveStatus}
                handleDelete={handleDelete}
                key={order._id}
                order={order}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
