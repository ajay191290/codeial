const express=require('express');
const app=express();
const port=8001;

app.use('/', require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(`Error in running on port: ${port}`);
    }
    console.log(`Server is running on port: ${port}`);
});