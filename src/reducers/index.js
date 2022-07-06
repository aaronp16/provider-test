import counterReducer from "./counter";
import bananaReducer from "./banana";

const mainReducer = ({ counter, banana }, action) => {
  return {
    counter: counterReducer(counter, action),
    banana: bananaReducer(banana, action),
  }
}

export default mainReducer;