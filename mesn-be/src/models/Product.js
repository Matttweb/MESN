import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  uprice: {
    type: Number,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
});

export default model("Product", productSchema);
