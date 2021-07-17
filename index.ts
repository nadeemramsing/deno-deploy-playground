import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.get("/hello/:name", (ctx) => {
  ctx.response.body = `Hello, ${ctx.params?.name ?? 'Nadeem'}.`
})

router.get("/hello", (ctx) => {
  ctx.response.body = 'Hello, World.';
})

router.get("/", (ctx) => {
  ctx.response.body = 'Welcome to deno-deploy-playground.';
})

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

addEventListener("fetch", app.fetchEventHandler());