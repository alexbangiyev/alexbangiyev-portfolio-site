import express from "express"
import cors from "cors"
import messages from "./api/messages.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/messages", messages)
app.use("*", (req,res) => res.status(404).json({error:"not found"}))

export default app