import mongoose from "mongoose";

const uri = "mongodb://localhost/mesn";
const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

export default async function connectDB() {
  await mongoose.connect(uri, options, () => {
    console.log("Database is connected");
  });
}
