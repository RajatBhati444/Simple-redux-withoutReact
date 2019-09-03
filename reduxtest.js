const { createStore } = require("redux");

const initialState = {
  age: 21,
  name: "rajat"
};

const myReducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === "ADD") {
    newState.age += 1;
  }
  if (action.type === "Substract") {
    newState.age -= +1;
    newState.name = "bhati";
  }
  // return newState;
  return newState;
};

const store = createStore(myReducer);

store.subscribe(() => {
  console.log("state change " + JSON.stringify(store.getState()));
  stateobj = store.getState();
  console.log(stateobj.name);
});

store.dispatch({ type: "ADD" });
store.dispatch({ type: "Substract" });
