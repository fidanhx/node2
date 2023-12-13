const fs = require('fs');

const express = require('express');
const app = express();
fs.readFile('./users.json', 'utf8', (err, users)=>{
{
    if (!err) {
        users = JSON.parse(users);

        app.get('/', (req,res)=>{
            res.send("home page")
        })
        
        app.get('/users', (req,res)=>{
            res.send(users)
        })

        app.get('/users/:id', (req,res)=>{
            const userID = req.params.id;
            const selectedUser = users.find(user=>user.id == userID)

            if(selectedUser){
                res.send(selectedUser)
            }else{
                res.status(404).send('Not found any user!')
            }
        })

        } 
 }});


app.listen(4000, ()=>{
    console.log("Server was configurated!");
})
  
