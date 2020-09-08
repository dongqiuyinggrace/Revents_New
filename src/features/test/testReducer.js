import { asyncActionStart, asyncActionFinish, asyncActionError } from './../../app/async/asyncReducer';
import { delay } from './../../app/common/util/util';

export const NUMBER_INCREMENT = 'NUMBER_INCREMENT';
export const NUMBER_DECREMENT = 'NUMBER_DECREMENT';

export const increment = (amount) => {
    return async dispatch => {
      dispatch(asyncActionStart());
      try {
        await delay(1000);
        dispatch({type: NUMBER_INCREMENT, payload: amount});
        dispatch(asyncActionFinish());

      } catch(error) {
        dispatch(asyncActionError(error));
      }
      
    }
  };
  
  export const decrement = (amount) => {
    return async dispatch => {
      dispatch(asyncActionStart());
      try {
        await delay(1000);
        dispatch({type: NUMBER_DECREMENT, payload: amount});
        dispatch(asyncActionFinish());
      } catch(error) {
        dispatch(asyncActionError(error));
      }
    }
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
