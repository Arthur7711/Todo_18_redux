export function asyncReducer(state = [], action) {
  switch (action.type) {
    case "ASYNC_ADD":
      return (state = [...state, ...action.payload]);
    default:
      return state;
  }
}
