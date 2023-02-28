import mongoose from "mongoose";
import { Schema } from "mongoose";

const tutorialSchema = new Schema({
  title: String,
  author: String,
});

const Tutorial = mongoose.model("tutorials", tutorialSchema);

export default Tutorial;
