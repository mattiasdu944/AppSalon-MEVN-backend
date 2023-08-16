import express from "express";
import dotenv from "dotenv";

import servicesRoutes from "./routes/service.routes.js";

dotenv.config();
const app = express();

app.use('/api', servicesRoutes)


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log('Server on port:', PORT)
})