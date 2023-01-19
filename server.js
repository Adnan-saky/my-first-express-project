const express = require("express");
const app = express();
const path = require('path')
const PORT = process.env.PORT || 3000

const users = require('./users')

//* body parser middleweare
app.use(express.json());
app.use(express.urlencoded({ extended : false}))




const isAuth = true;






//*Middlewear func
/*const logger = (req,res,next)=>{
    if(isAuth){
        console.log('Auth');
        next();
    }
    else{
        return res.status(400).json({msg:"Not auth"});
    }    
};
app.use(logger)
*/


//*app.get("/", (req, res) => {
  //res.send("Hello Express!");
  //res.send('<h2>Test</h2>')
 // res.sendFile(path.resolve('Pub/index.html'));
//});

//*app.use(express.static(path.resolve('Pub')))



//*app.get('/api/users',(req,res)=>{
   // res.json(users);
//}
//)
//*Get single user
//app.get('api/users/:id'),(req,res)=>{
    //res.json(req.param.id)
//}
//*Get single user
//app.get('api/users/:id'),(req,res)=>{
    //res.json(req.param.id)
//}


//*app.get('/api/users/:id', (req, res) =>{
   /* const userId = parseInt ( req.params.id) ;
    const isfound = users.some (user => user. id === userId);
    if(isfound) {
    res.json(users.filter (user => user.id === userId));
    }
    else {
    res.status (480).json({msg: `no user with the of ${req.params.id}`})
    }
})*/
app.use('/api/users', require('./routes/user'))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


 

