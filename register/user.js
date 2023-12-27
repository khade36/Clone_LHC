var mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    username:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    },
    password:{
        type:String
    },
    confirmPass:{
        type:String
    },
    gender:{
        type:String
    }
});
 const user=mongoose.model("user",userSchema);
  
 module.exports=user;

// const userdata=mongoose.connect('mongod://localhost:27017/lh-username');
























// var db=mongoose.connection;
// db.on('error',()=>console.log("error while connect"));
// db.once('open',()=>console.log("connected to database"));


// app.use(bodyParser.json());
// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({
//     extended:true
// }));



// app.post('/post-feedback',(req,res)=>{
//     console.log('entered');
//     var name=req.body.name;
//     var username=req.body.name;
//     var email=req.body.name;
//     var phone=req.body.phone;
//     var pass=req.body.pass;
//     var confirmPass=req.body.pass;
//     var gender=req.body.gender;
    
//     var data={
//         "name":name,
//         "username":username,
//         "email":email,
//         "phone":phone,
//         "pass":pass,
//         "confirmPass":confirmPass,
//         "gender":gender
//     }

//     console.log(data);
    
//     // db.collection('user-LH').insertOne(data);

// });
