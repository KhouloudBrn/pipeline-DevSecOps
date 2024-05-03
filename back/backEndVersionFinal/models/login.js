const mongoose=require('mongoose') ;
const Login=mongoose.model('Login' , {
    UserName : { type : String} , 
    password : { type : String}
}) ;
module.exports=Login ; 