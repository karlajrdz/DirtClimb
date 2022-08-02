const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://Karla:1234@cluster0.cpjxr1u.mongodb.net/DirtClimb' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose