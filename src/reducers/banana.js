export const types = {
  UPDATE_BANANA: 'UPDATE_BANANA',
}

export const initialState = 'banana';

const bananaReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.UPDATE_BANANA:
      return action.payload;
    default: return state;
  }
}

export default bananaReducer;
