const mongoose = require("mongoose");

module.exports = () => {
  const connect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(
      DB_URI,
      {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err) => {
        if (err) {
          console.log("MongoDB connection error.", err);
        } else {
          console.log("MongoDB connection success.");
        }
      }
    );
  };

  connect();
};