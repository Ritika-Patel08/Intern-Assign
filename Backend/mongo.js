const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://ritikapatel:m4L8BFxVCiTWnHS1@cluster0.gxizwu3.mongodb.net/?retryWrites=true&w=majority")
.then(()=>
{
    console.log("connection succeeded")
}).catch(()=>
{
    console.log("connection failed")
    
})

const userSchema = new mongoose.Schema({
   
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    
})

const collection=mongoose.model("collection",userSchema)


module.exports=collection
