const express = require('express')
const collection = require('./mongo')
const collection1 = require('./mongo1');
const cors=require('cors')
const app =express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/",cors(),(req,res)=>{

})

app.post("/",async(req,res)=>{
    const{email,password}=req.body;
    

    try {
        const check =await collection.findOne({email:email}).then(res=>{
            return res._id;
        })
  
    
       
        if(check)
        {
          // res.json({"userId":check})
            res.json("exist")
        }else {
            res.json("notExist")
        }
    } catch (error) {
        console.log(error);
    }
})

app.post("/signup",async(req,res)=>{
    const{email,password}=req.body;
     const data=new collection({
        email:email,
        password:password
     })
    try {
        const check =await collection.findOne({email:email})

        if(check)
        {      
            // res.json({"userId":check})
            res.json("exist")
        }else {
            res.json("not exist")
            await collection.insertMany([data])
        }
    } catch (error) {
        console.log(error);
    }
})
app.post('/submit', async (req, res) => {
    const { name,email,phone,address,workExperience,education,skills}=req.body;
    
 
    const data={ name: name,
    email: email,
    phone: phone,
    address: address,
    workExperience:workExperience ,
    education: education,
    skills: skills,
    
    }
   

    try {
        console.log(data);
        await collection1.insertMany([data]);

      res.json("success");
      res.status(200).json({ message: 'Resume submitted successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error submitting resume.' });
    }
  });


app.listen(4000,()=>{
    console.log("port is running");
});