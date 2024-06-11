
import { SignIn } from "@clerk/nextjs";

// export default function Page() {
//   // return <SignIn />;
//   return (
//     <> <h1>show up ople
//       </h1> </>
//   )
// }

import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div><SignIn /></div>
  )
}

export default page