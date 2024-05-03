const express=require('express') ;
const app=express();
const logRout=require('./routes/login');
const creatRout=require('./routes/creat');
require('./config/connect');
app.use(express.json());


app.use('/log' , logRout) ;
app.use('/creat' , creatRout) ;










app.listen(3000, ()=>{console.log('server work');});