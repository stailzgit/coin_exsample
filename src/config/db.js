require("dotenv").config();

const mongoose = require("mongoose");

const DATABASE_URL = process.env.DATABASE_URL;
console.log("DATABASE_URL", DATABASE_URL);

const connectDB = () => {
  mongoose.set("strictQuery", false);
  return mongoose.connect(
    DATABASE_URL,
    { useUnifiedTopology: true, useNewUrlParser: true },
    (err) => {
      if (err) {
        console.error("Connection to DB failed");
      } else {
        console.log("Connection to DB was successful");
      }
    }
  );
};

// const connectDB = async () => {
//   try {
//     mongoose.set("strictQuery", false);
//     mongoose.connect(DATABASE_URL);
//     console.log("Connection to DB was successful");
//   } catch (error) {
//     console.error("Connection to DB failed - ", error);

//     process.exit();
//   }
// };

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection failed"));

module.exports = connectDB;
