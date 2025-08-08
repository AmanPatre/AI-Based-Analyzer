import express from "express"
import dotenv from 'dotenv';
import cors from "cors"
import anaRouter from "./routes/analyzeRoutes.js";

const app = express()
const port = 3000


//middlewares 
dotenv.config();
app.use(cors());
app.use(express.json())

//routes
app.use("/test" , anaRouter  )




app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
