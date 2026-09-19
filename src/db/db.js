const mongoose=require("mongoose");
async function connectDb(){
    await mongoose.connect("mongodb+srv://sourabhpatel00098_db_user:9vybarN9pMDqCbZr@backend.g8ixzpm.mongodb.net/arthar_morgan")
    console.log("db connected successfully");
};
module.exports=connectDb;