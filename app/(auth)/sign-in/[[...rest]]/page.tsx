import { SignIn } from "@clerk/nextjs";


import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className=" ">
      {/* <SignIn /> */}
      <SignIn routing="hash" />
    </div>
  );
};

export default page;
