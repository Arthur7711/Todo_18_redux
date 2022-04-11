import React from "react";
import { asyncActionCreator } from "../../redux/actions/asyncActionCreator";
import { fetchCustomers } from "../../redux/actions/fetchCustomers";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function AsyncComponent() {
  const dispatch = useDispatch();
  const customers = useSelector((data) => data.customers);

  return (
    <div>
      <button
        onClick={() => dispatch(fetchCustomers())}
        className="border-2 border-black border-solid rounded-lg ml-5 px-1 "
      >
        Get DAta
      </button>
      <div>
        {customers && customers.map((el, i) => <p key={i}>{el.name}</p>)}
      </div>
    </div>
  );
}
