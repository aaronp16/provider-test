import React from 'react'

import { useStore } from "../providers/StoreProvider";
import ButtonComponent from "./ButtonComponent"
import Component3 from "./Component3"

const Component2 = () => {
  const {store} = useStore();
  return (
    <>
      {store.banana}
      <ButtonComponent />
      <Component3 />
    </>
  )
}

export default Component2