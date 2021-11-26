const initState = {
  counter: 0,
  loggedIn: false,
};

export const CounterReducer = (state = initState, action) => {
  // switch (action.payload) {
    switch (action.type) {
    case "Increment":
      // let newPlusCount = initState.counter + 1;
      let newPlusCount = state.counter + 1;
      console.log(newPlusCount,"ay 7aga tb");
      return {
        ...state,
        counter: newPlusCount,
      };
    case "Decrement":
      // let newMinusCount = initState.counter - 1;
      let newMinusCount = state.counter - 1;
      return {
        ...state,
        counter : newMinusCount
}
    case "Sign_In":
      return { ...state, loggedIn: true };

    case "Sign_Out":
      return { ...state, loggedIn: false };

    default:
      return state;
  }
};
