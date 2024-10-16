import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
    publicRoutes:['/browse','/course-preview/(.*)']
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};