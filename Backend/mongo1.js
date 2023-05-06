const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://ritikapatel:m4L8BFxVCiTWnHS1@cluster0.gxizwu3.mongodb.net/?retryWrites=true&w=majority")
.then(()=>
{
    console.log("connection succeeded")
}).catch(()=>
{
    console.log("connection failed")
    
})



const resumeSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
    unique: true
    },
    phone: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true,
    },
    workExperience: [
      {
        company: {
          type: String,
          required: true
        },
        position: {
          type: String,
          required: true   
         },
        startDate: {
          type: Date,
          required: true
        },
        endDate: {
          type: Date
        },
        jobDescription: {
          type: String,
          required: true
      }
    }
    ],
    education: [
      {
        school: {
          type: String,
          required: true    
         },
        degree: {
          type: String,
          required: true
        },
        fieldOfStudy: {
          type: String,
          required: true     
          },
        startDate: {
          type: Date,
          required: true     
          },
        endDate: {
          type: Date
        },
        description: {
          type: String
        }
      }
    ],
    skills: [
      {
        skill: {
          type: String,
          required: false
        },
        proficiency: {
          type: String,
          required: false
        }
      }
    ],
    createdAt: {
      type: Date,
      default: Date.now
    },
   

  });

const collection1=mongoose.model("collection1",resumeSchema)


module.exports=collection1