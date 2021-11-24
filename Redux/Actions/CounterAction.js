const Increment = () => {
  return {
    type: "Increment",
    payload: null,
  };
};

const Decrement = () => {
    return {
      type: "Decrement",
      payload: null,
    };
  };

  const Login = () => {
    return {
      type: "Sign_In",
      payload: null,
    };
  };

  const Logout = () => {
    return {
      type: "Sign_Out",
      payload: null,
    };
  };



  export {Increment,Decrement,Login,Logout}