const INCREMENT = "increment";
const DECREMENT = "decrement";
const INCREMENTBYVALUE = "incrementByValue";
const initialValue = {
  count: 0,
};

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});
export const incrementByValue = (value) => ({
  type: INCREMENTBYVALUE,
  payload: value,
});
function counterReducer(state = initialValue, actions) {
  switch (actions.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case INCREMENTBYVALUE:
      return {
        ...state,
        count: state.count + actions.payload + 10,
      };
    default:
      return state;
  }
}

export default counterReducer;
