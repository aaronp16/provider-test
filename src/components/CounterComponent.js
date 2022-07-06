import React from 'react'
import { useStore } from '../providers/StoreProvider'

const CounterComponent = () => {
  const {store} = useStore();
  return (
    <div>{store.counter}</div>
  )
}

export default CounterComponent