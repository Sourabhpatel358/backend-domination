const moongoose=require("moongoose")
async function connectdb(){
    await moongoose.connect("mongodb+srv://sourabhpatel00098_db_user:9vybarN9pMDqCbZr@backend.g8ixzpm.mongodb.net/damey")
    console.log("connected to database");
}
module.exports=connectdb