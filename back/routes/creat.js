const express=require('express');
const router=express.Router();
const Creat=require('../models/creat');


router.post('/creatCompt',(req,res)=>{
    data=req.body;
    crt = new Creat(data);
    crt.save().then((done)=>{res.send(done);}).catch((error)=>{res.send(error);});
});


router.get('/getFromCreat/:id',async(req,res)=>{
   try{
    id =req.params.id;
    user =await Creat.findById({_id : id}) ;
    res.send(user);
   }
   catch(error){res.send(error) ;}
});


router.put('/updateCreat/:id',async(req,res)=>{
    try{
        myid=req.params.id;
        newData=req.body ;
        updated = await Creat.findOneAndUpdate({_id: myid},newData);
        res.send(updated);
    }
    catch(error){res.send(error);}

});

module.exports=router;

