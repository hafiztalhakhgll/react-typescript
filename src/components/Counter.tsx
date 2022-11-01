import { useReducer } from "react";

type CounterState = {
  count: number;
};

type CounterUpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};

type CounterResetAction = {
  type: "reset";
};

type CounterAction = CounterUpdateAction | CounterResetAction;

const initialState = {
  count: 0
};

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>Count {state.count}</p>

      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
