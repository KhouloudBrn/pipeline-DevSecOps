const mongoose=require('mongoose');
const Creat=mongoose.model('Creat',{
    Name: {type : String} , 
    Email: {type : String} , Password: {type : String} ,
   
});
module.exports=Creat;