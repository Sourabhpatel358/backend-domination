const app=require("./src/app");
const connectdb=require("./src/db/db");
//coz abhi tk humne db ko run nhi kiya tha 
connectdb();
app.listen(3000,
    console.log("server started successfully")
);
