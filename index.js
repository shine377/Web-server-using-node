const express = require('express');
const port =3000; 
const app = express();

app.get("/",(req,res) =>{
    res.send("This is the node project with sequelize")
})
app.listen(port, () =>{
    console.log('Running on port 3000');
})