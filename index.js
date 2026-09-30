const jsonServer = require('json-server')

const app = jsonServer.create()

const router = jsonServer.router('db.json')

const middleware = jsonServer.defaults()

const PORT = 3000

app.use(middleware)
app.use(router)

app.listen(PORT, () => {
    console.log(`Job Tracker Server running at PORT: ${PORT}`)
})