import React from 'react'

import { useStore } from "../providers/StoreProvider";
import CounterComponent from "./CounterComponent"

const Component3 = () => {
  const {store} = useStore();
  return (
    <>
      <CounterComponent />
      {store.banana}
    </>
  )
}

export default Component3