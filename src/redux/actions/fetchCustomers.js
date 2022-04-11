import { asyncActionCreator } from "./asyncActionCreator";

export const fetchCustomers = () => {
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => dispatch(asyncActionCreator(json)));
  };
};
