const express = require("express")
const Connection = require("./DB config/DB")
const router = require("./routes/route")
require("dotenv").config()
const app = express()
const cors = require("cors")

Connection()

app.use(express.json())
app.use(cors())

app.use("/", router)


app.listen(process.env.PORT, ()=>{
    console.log(`server listen to the port ${process.env.PORT}`)
})