const { response } = require("express");
const Post = require("../models/user");

const postCtrl={};

//Add Post
postCtrl.AddPost = async(req, res)=>{
    const {name,author,content,Date_of_creation}=request.body;
    const post = Post({name,author,content,Date_of_creation})
    
    try{
    const newPost= await post.save()
    response.send({
        message:'Post added Successfully',
        newPost
    })}catch (exception){
        response.status(500).send({error: 'Add Post'})
    }
}





//Delete Post
userControl.deletePost = async(req, res) =>{

    try{
        let person = await Post.find({name,author,content,Date_of_creation})
        res.status(200).send({ message: 'Your account has successfully been deleted'}) 
    }catch(error){
        console.log(error)

    }
}