const mongoose = require('mongoose');

const connectDB = async () => {
    const dbUrl = process.env.DB_URL || "mongodb://localhost/notes";
    try{
        const conn = await mongoose.connect(dbUrl,{
            useNewUrlParser: true,
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);

    }catch(error){
        console.log(`Error: ${error.message}`);
        process.exit();
    }
};

module.exports = connectDB;