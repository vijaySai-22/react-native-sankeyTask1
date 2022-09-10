const express= require('express');
const cors=require('cors')


const app=express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))

let users={username:'sankey',password:'Sankey@123'}

app.get('/',(req,res)=>{
    res.json({msg:"Hello"})
})

app.post('/login',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    console.log(username,password)
    if(username&&password){
        console.log('yess')
        if(username===users.username){  
            if(password===users.password){
                res.json({msg:"Valid credientals",status:"success"})
                console.log('oooookkkkk')
            }else{
                res.json({msg:"Invalid Credientals",status:"error"})
            }
        }else{
            res.json({msg:"User not found",status:"error"})
        }
    }
})

app.listen(3200,()=>{
    console.log('Server running')
})