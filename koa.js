const koa = require('koa')
const Router = require("koa-router")()
const koaParser = require("koa-bodyparser")
const controller = require("./controllers")
const Cors = require("koa2-cors")
const session = require('koa-session')
const app = new koa()
app.keys = ['this is my secret and fuck you all', 'please be polite']
const config = {
    key: 'koa:sess',
    maxAge: 60000,
    autoCommit: true,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false,
    renew: false,

}

app.use(session(config, app))

app.use(koaParser())



// app.use(async (ctx, next)=>{
//     ctx.set('Access-Control-Allow-Origin', "http://192.168.56.1:8080");
//     ctx.set("Access-Control-Allow-Headers","Content-Type")
//     await next()
// })
app.use(Cors({
    origin: "http://192.168.56.1:8080",
    credentials: true,
    allowMethods: ["POST",  "GET"],
    allowHeaders: ["Content-Type", "token"]

}))


app.use(controller());

app.listen(3000)
console.log('app started at port 3000...')