export const types = {
  UPDATE_COUNTER: 'UPDATE_COUNTER',
}

export const initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.UPDATE_COUNTER:
      return action.payload;
    default: return state;
  }
}

export default counterReducer;