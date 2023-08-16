import { Schema, model } from "mongoose";

const servicesSchema = Schema({
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true, trim: true },
})

const Services = model('Services', servicesSchema);
export default Services;