import userModel from "../../../database/models/user.model.js"
import  bcrypt, { hash }  from 'bcrypt';


const sighUp=async (req,res)=>{

    const {name,email,password} = req.body

    const user =await userModel.findOne({email})
    if(user) return res.json({messageL: 'user already exists'})
        const  hash =bcrypt.hashSync(password, parseInt(process.env.SALTROUND_KEY))

    await userModel.insertMany({name,email,password:hash})
res.json({messageL: 'success'})

}

export{

    sighUp 
}