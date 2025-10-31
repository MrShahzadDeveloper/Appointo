import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config();

// app config
const app = express()
const port = process.env.PORT || 8000

// middlewares
app.use(express.json())
app.use(cors()) // used for the connection of Frontend with server

// api endpoint
app.get("/",(req, res)=>{
    res.send("Api Working Successfully")
})

app.listen(port, ()=>{
    console.log(`Server is Running on Port ${port}`)
})