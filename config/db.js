const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to mongodb Database ${mongoose.connection.host}`);
    }catch(error){
        console.log(`MONGO Connect Error ${error}`);
    }
};

module.exports = connectDB;