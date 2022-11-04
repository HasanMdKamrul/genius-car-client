import React, { useEffect, useState } from "react";

const OrdersRow = ({ order, handleDelete, handleApproveStatus }) => {
  const {
    _id,
    serviceId,
    serviceName,
    customer,
    email,
    phone,
    message,
    status,
  } = order;

  const [serviceOrder, setServiceOrder] = useState({});

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(
          `https://genius-car-server-ruby.vercel.app/services/${serviceId}`
        );
        const data = await response.json();

        setServiceOrder(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, [serviceId]);

  //   ** delte hobe koi theke orders theke

  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
            X
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 ">
              {serviceOrder?.img && (
                <img
                  src={serviceOrder?.img}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{serviceName}</div>
            <div className="text-sm opacity-50">{customer}</div>
          </div>
        </div>
      </td>
      <td>
        {email}
        <br />
        <span className="badge badge-ghost badge-sm">{phone}</span>
      </td>
      <td>Purple</td>
      <th>
        <button className="btn btn-ghost btn-xs">{message}</button>
      </th>
      <th>
        <button
          onClick={() => handleApproveStatus(_id)}
          className="btn btn-ghost btn-xs"
        >
          {status ? status : "pending"}
        </button>
      </th>
    </tr>
  );
};

export default OrdersRow;
