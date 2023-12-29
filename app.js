const express=require('express');
const bodyParser = require('body-parser');
var mongoose=require('mongoose');
const app=express();
const user=require('./register/user');
const fs=require('fs');
mongoose.connect('mongodb+srv://linguisthubs_:9881935964Ak@cluster0.u7fo1lb.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log("data connected");
}).catch((e)=>{
    console.log(e);
    console.log("issue with database connection");
});

app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended:true
}));


// app.get("/",(req,res)=>{
//     res.set({
//         "Allow-access-Allow-Origin":'*'
//     });
// });



app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin":'*'
    });
    res.sendFile(__dirname+'/home/index.html');
    app.use('/style.css',express.static(__dirname +'/home/style.css'));
    app.use('/images',express.static(__dirname +'/home/images'));
})


app.get("/signup",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin":'*'
    });
    res.sendFile(__dirname+'/register/register.html');
    app.use('/register.css',express.static(__dirname+'/register/register.css'));
    app.use('/images',express.static(__dirname+'/register/images'));
});

app.post('/post-feedback',async (req,res)=>{    
const userSchema=new user(req.body);
console.log(userSchema);
await userSchema.save();
res.end();
});


app.listen(5000);
console.log("server open");
