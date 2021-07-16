import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.get("/hello/:name", (ctx) => {
  ctx.response.body = `Hello, ${ctx.params?.name ?? 'Nadeem'}`;
})

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

addEventListener("fetch", app.fetchEventHandler());
