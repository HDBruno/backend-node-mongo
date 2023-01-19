const mongoose = require("mongoose");

module.exports = () => {

    const connect = () => {
        mongoose.connect(
            process.env.DB_URI,
            {
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (err) => {
                if (err) {
                    console.log("MongoDB connection error.");
                } else {
                    console.log("MongoDB connection success.");
                }
            }
        )
    }

    connect();
}   

