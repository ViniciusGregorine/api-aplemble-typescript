import { NextFunction, Response, Request} from "express"
import  jwt from "jsonwebtoken"

export const authMiddleware = async(req: Request, res: Response, next: NextFunction) => { 
    const token: any = req.headers['x-acess-token'] 
    
    if(!token) return res.status(401).json({message: "without token, without happyness"})

    jwt.verify(token, process.env.JWT_KEY!, (err: any, decoded: any)=>{
        if(err) res.status(401).json({message: `${err}`}) // sei n isso aqui em
        console.log(decoded)
    })

    next()
}