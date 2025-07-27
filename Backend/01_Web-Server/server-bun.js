import { serve } from "bun";

serve({
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response("Hello welcome to home by bun", { status: 200 });
    } else if (url.pathname === "/login") {
      return new Response("Welcome to login page by bun", { status: 200 });
    } else {
      return new Response("404 Not Found", { status: 404 });
    }
  },
  port: 3000,
  hostname: "127.0.0.1",
});
