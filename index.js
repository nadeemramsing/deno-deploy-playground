import { Application, Router, renderToString } from './dep.js'
import home from "./pages/home.jsx"

const router = new Router();

router.get("/hello/:name", (ctx) => {
  ctx.response.body = `Hello, ${ctx.params?.name ?? 'Nadeem'}.`
})

router.get("/hello", (ctx) => {
  ctx.response.body = 'Hello, World.';
})

router.get("/", (ctx) => {
  ctx.response.body = renderToString(home());
})

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

addEventListener("fetch", app.fetchEventHandler());

await app.listen({ port: 8000 });