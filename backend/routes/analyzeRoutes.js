import express from "express"
import { analyze } from "../controllers/analyze.js";
const anaRouter = express.Router();
anaRouter.post("/analyze" , analyze )
export default anaRouter;