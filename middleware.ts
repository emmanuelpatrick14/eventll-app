// import { clerkMiddleware } from "@clerk/nextjs/server";

// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// export default clerkMiddleware();

// export const config = {
//   matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };





// const isPublicRoute = createRouteMatcher([
//   "/",
//   "/events/:id",
//   "/api/webhook/clerk",
//   "/api/webhook/stripe",
//   "/api/uploadthing"

// ]);

// export default clerkMiddleware((auth, request) => {
//   if(!isPublicRoute(request)) {
//     auth().protect();
//   }
// });

// export const config = {
  // matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/events/:id",
  "/api/webhooks/clerk",
  "/api/webhook/stripe",
  "/api/uploadthing",'/sign-in', '/sign-up'
]);

export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
