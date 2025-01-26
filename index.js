import express from 'express'

const app = express()


app.use(express.json())
app.use(express.static('assets'))


app.listen(3001, () => {
    console.log("app corriendo en puerto 3000")
})