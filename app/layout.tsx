import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Evently",
  description: "Evently is a platform for event management.",
  icons: {
    icon: "/assets/images/logo.svg",
    // I6TH MIN
  },
};

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>
          {/* <header> */}
            {/* <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn> */}
          {/* </header> */}
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <ClerkProvider>
//       <html lang="en">
//         <body className={poppins.className}>{children}</body>
//       </html>
//     </ClerkProvider>
//   );
// }
// Full Stack Javascript/Typescript Developer – Front-end leaning, with an enjoyment for good design stemming from a Graphic design background.

// I'm a full-stack developer specializing in PHP for back-end development and JavaScript for front-end. My expertise includes working with JavaScript, PHP, frameworks like React and Slim, programming model such as OOP, technology stacks such as LAMP and MERN , RESTful API and MVC design pattern. Also worked with Node.js, MongoDB, MySQL and NOSQL , PHPUnit and Jest for testing. Experienced in working with HTML5 and CSS, Bootstrap and Tailwind for browser styling. Worked collaboratively in team environments, following Agile methodologies. Eager to contribute my knowledge to creating innovative websites and applications in the IT industry.I'm a full-stack developer specializing in PHP for back-end development and JavaScript for front-end. My expertise includes working with JavaScript, PHP, frameworks like React and Slim, programming model such as OOP, technology stacks such as LAMP and MERN , RESTful API and MVC design pattern. Also worked with Node.js, MongoDB, MySQL and NOSQL , PHPUnit and Jest for testing. Experienced in working with HTML5 and CSS, Bootstrap and Tailwind for browser styling. Worked collaboratively in team environments, following Agile methodologies. Eager to contribute my knowledge to creating innovative websites and applications in the IT industry.
