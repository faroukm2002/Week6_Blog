
import jwt from 'jsonwebtoken'
export const auth =(req,res,next)=>{

    const {token}=req.headers
    jwt.verify(token,process.env.SECRET_KEY,async (err, decoded) => {
        if (err) {
            res.json({message:"Invalid token",err})

        }
        else{
           next()
        }
    })

   
    
}

