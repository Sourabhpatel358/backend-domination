const moongoose=require("moongoose");
const noteSchema=new moongoose.schema({
    title:string,
    description:string,
})