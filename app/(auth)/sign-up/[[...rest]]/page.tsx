
import React from 'react';
import { SignUp } from "@clerk/nextjs";


type Props = {};

const page = (props: Props) => {
  return (
    <div className=" ">
      console.log("signing up");
      
      <SignUp routing="hash" />
    </div>
  );
};

export default page;