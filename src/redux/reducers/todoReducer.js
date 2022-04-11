export function todoReducer(initialState = [], action) {
  switch (action.type) {
    case "ADD":
      return (initialState = [...initialState, action.payload]);
    default:
      return initialState;
  }
}
