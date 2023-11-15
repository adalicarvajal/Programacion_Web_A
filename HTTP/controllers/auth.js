import  db  from "../routes/connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
    
    //check user if exists

    const q = "SELECT * FROM cliente WHERE usuario = ?"

    db.query(q,[req.body.usuario],(err,data)=>{
        if(err) return res.status(500).json(err)
        if(data.length) return res.status(409).json("User already exists!")
    //crear nuevo usuario
        //hash password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.clave, salt)

        const q = "INSERT INTO cliente (`cedula`,`usuario`, `email`,`clave`,`nombre`,`direccion`) VALUE (?)"

        const values = [req.body.cedula, req.body.usuario, req.body.email,hashedPassword ,req.body.nombre, req.body.direccion]
        
        db.query(q,[values], (err,data) =>{
            if(err) return res.status(500).json(err)
            return res.status(200).json("User has been created")
        })
    
    })

    
}
export const login = (req, res) => {
    const q = "SELECT * FROM cliente WHERE usuario = ?"

    db.query(q,[req.body.usuario] ,(err,data)=>{
        if(err) return res.status(500).json(err);
        if(data.length === 0) return res.status.json("User not found");


        const checkPassword = bcrypt.compareSync(req.body.clave, data[0].clave)
        
        if(!checkPassword) return res.status(400).json("Wrong password or username!")
    
        const token = jwt.sign({id: data[0].cedula }, "secretkey")
        
        const {clave, ...others} = data[0]
        
        res.cookie("accessToken", token, {
            httpOnly : true, 
        }).status(200).json(others)
    })
    
}
export const logout = (req, res) => {
    res.clearCookie("accessToken",{
        secure:true,
        sameSite:"none"
    }).status(200).json("User has been logged out")
    
}