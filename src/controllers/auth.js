const { response } = require("express");
const User = require("../models/user");
/**
 * 1. Get user input
 * 2.save data
 * 3. input => firstname,lastname, email,password
 */

 const authCtrl={}

authCtrl.signup = async(req, res)=>{
    const {firstname, lastname, email, password}=request.body;
    const user = User({firstname, lastname, email, password})
    
    try{
    const newUser= await user.save()
    response.send({
        message:'User created Successfully',
        newUser
    })}catch (exception){
        response.status(500).send({error: 'Email Already Used'})
    }
}

authCtrl.login = async(req, res)=>{
    const { email, password}=request.body;
    //const user = User({email, password})
    
    try{
    let person = await User.find({email, password})
    if (person){
    response.send({
        message:'Welcome Dear User ',})
        }elseres.status(400).send({message: "User does not exist"})
}catch (exception){
        response.status(500).send({error: 'Login Unsuccessful'})
    }
}


module.exports=authCtrl;