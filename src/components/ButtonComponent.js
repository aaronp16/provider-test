import React from 'react';
import { useStore } from '../providers/StoreProvider';
import { types } from '../reducers/counter';

const ButtonComponent = () => {
  const {store, dispatch} = useStore();
  return (
    <button onClick={() => {
     dispatch({
      type: types.UPDATE_COUNTER,
      payload: store.counter + 1,
     })
    }}>Click me!</button>
  )
}

export default ButtonComponent;
