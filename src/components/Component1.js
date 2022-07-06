import React from "react";

import { useStore } from "../providers/StoreProvider";
import Component2 from "./Component2"

const Component1 = () => {
  const {store} = useStore();
  return (
    <>
      {store.banana}
      <Component2 />
    </>
  )
}

export default Component1