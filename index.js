import express from "express";
import routes from "./routes/routes.js";

const app = express();


app.use('/api', routes)



const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log('Server on port:', PORT)
})