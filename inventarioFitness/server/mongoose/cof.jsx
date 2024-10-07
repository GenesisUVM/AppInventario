import mongoose from 'mongoose'

const PropertySchema = new mongoose.Schema({

});

export const Propiedad = mongoose.model("Propiedad", PropertySchema)