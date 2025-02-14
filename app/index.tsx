import { Redirect } from "expo-router";
import React from "react";

interface IHomeProps {}

export default function Home() {
  return (
    <>
      {/* // TODO: for tev. go back to welcome page  */}
      <Redirect href="/(auth)/sign-up" />
    </>
  );
}
