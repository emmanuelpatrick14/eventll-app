

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/events/:id",
  "/api/webhooks(.*)",
  "/api/webhook/stripe",
  "/api/uploadthing",'/sign-in', '/sign-up'
]);

export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect();
  } // enforce auth for nonpublic routes
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

