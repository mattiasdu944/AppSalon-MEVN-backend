import dotenv from "dotenv";
import { db } from "../config/index.js";

import Services from "../models/services.js";
import { services } from "./beauty-data.js";

dotenv.config();
const command = process.argv[2];

async function seed(){
    await db.connect();
    await Services.deleteMany();
    await Services.insertMany(services);
    await db.disconnect();
}


async function clear(){
    await db.connect();
    await Services.deleteMany();
    await db.disconnect();
}
switch (command) {
    case '--seed':
        seed();
        break;
    case '--clear':
        clear();
        break;
}