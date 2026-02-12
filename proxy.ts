import { withAuth } from "next-auth/middleware";

const proxy = withAuth();

export { proxy };
export default proxy;

export const config = {
  matcher: ["/dashboard", "/app/:path*"],
};
