import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import servicesRoutes from "./routes/service.routes.js";
dotenv.config();

const app = express();

app.use(express.json())
app.use('/api', authRoutes)
app.use('/api', servicesRoutes)

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log('Server on port:', PORT)
})