import React from 'react';
import { SignUp } from "@clerk/nextjs";

class SignInPage extends React.Component {
  render() {
    return (
      <div>
        <SignUp path="/sign-in" />
        {/* ... component rendering logic */}
      </div>
    );
  }
}

export default SignInPage;