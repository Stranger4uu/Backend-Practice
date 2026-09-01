const mongoose = require("mongoose");


async function connectDB(){
    await mongoose.connect("mongodb+srv://yashsaini4824_db_user:backend@backend.4trbwne.mongodb.net/project-1")

    console.log("Connected to DB")
}

module.exports = connectDB;