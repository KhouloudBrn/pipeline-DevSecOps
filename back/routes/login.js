const express=require('express') ;
const router=express.Router();
const jwt = require('jsonwebtoken') ;
const Login=require('../models/login');
const bcrypt =require('bcrypt');


router.post('/registre' , (req,res)=>{
    data=req.body;
    usr = new Login(data) ;
    usr.save().then((done)=>{res.send(done);}).catch((error)=>{res.send(error);}) ;
});

router.post('/login' , async (req,res)=>{
    data=req.body ;
    usr = new Login (data);
    salt = bcrypt.genSaltSync(10);
    cryptedPass = await bcrypt.hashSync(data.password , salt) ;
    usr.password = cryptedPass ;
    usr.save().then((saved)=>{res.send(saved) ; }).catch((error)=>{res.send(error) ;}) ;
}) ;


router.post('/loginToken' , async (req,res)=>{
    data=req.body ;
    user = await Login.findOne({UserName : data.UserName}) ;
    if(!user){
        res.status(404).send('email or password invalid !')
    }
    else { validPass = bcrypt.compareSync(data.password , user.password) ;
    if (!validPass){
        res.status(401).send('email or password invalid !')
    }
    else {
        payload = { _id : user._id ,
            UserName : user.UserName ,
        name : user.name}
        token = jwt.sign(payload , '1234567') ;
        res.status(200).send({mytoken : token})
    }
}
}) ;



const users = [];


function verifyToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).send('Access Denied');
  try {
    const verified = jwt.verify(token, 'secret_key');
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Invalid Token');
  }
}


router.post('/loginTokenn', async (req, res) => {
    const user = users.find(u => u.UserName  === req.body.UserName );
    if (!user) return res.status(400).send('User not found');
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid password');
    const token = jwt.sign({UserName : user.UserName  }, 'secret_key');
    res.header('authorization', token).send(token);
  });



module.exports=router;