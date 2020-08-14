export const NUMBER_INCREMENT = 'NUMBER_INCREMENT';
export const NUMBER_DECREMENT = 'NUMBER_DECREMENT';

export const increment = (amount) => {
    return {
      type: NUMBER_INCREMENT,
      payload: amount
    };
  };
  
  export const decrement = (amount) => {
    return {
      type: NUMBER_DECREMENT,
      payload: amount
    };
  };

const initialState = {
    data: 42
}

const testReducer = (state=initialState, {type, payload}) => {
    if (type === NUMBER_INCREMENT) {
        return {...state, data: state.data + payload};
    } else if (type === NUMBER_DECREMENT) {
        return {...state, data: state.data - payload};
    }
    return state;
}

export default testReducer;
