import React from "react";
import { View, Text, Button } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Decrement, Increment } from "../Redux/Actions/CounterAction";

export const Testing = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const loggedIn = useSelector((state) => state.counter.loggedIn);

  return (
    <View>
      <Button
        title="Increment"
        onPress={() => {
          console.log("ssss");
          dispatch(Increment());
        }}
      />
      <Text>{counter}</Text>
      <Button
        title="Decrement"
        onPress={() => {
          dispatch(Decrement());
        }}
      />

      {loggedIn ? (
        <Text onPress={() => dispatch(loggedIn(true))}>Sign In </Text>
      ) : null}
    </View>
  );
};
