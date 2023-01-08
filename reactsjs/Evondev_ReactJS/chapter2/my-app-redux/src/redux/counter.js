const INCREMENT = "increment";
const DECREMENT = "decrement";
const INCREMENTBYVALUE = "incrementByValue";
const initialValue = {
  count: 0,
};

export const Increment = () => ({
  type: INCREMENT,
});
export const Decrement = () => ({
  type: DECREMENT,
});
export const IncrementByValue = (value) => ({
  type: INCREMENTBYVALUE,
  payload: value,
});

const counterReducer = (state = initialValue, actions) => {
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
        count: state.count + actions.payload,
      };
    default:
      return state;
  }
};

export default counterReducer;
