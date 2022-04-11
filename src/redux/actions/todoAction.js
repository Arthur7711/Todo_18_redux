export const todoAdded = (todo) => {
  return {
    type: "ADD",
    payload: todo,
  };
};
