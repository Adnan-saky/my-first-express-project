const { Router } = require('express');
const express = require('express')
const router = express.Router()

const uuid = require('uuid')
const users = require('../users')

router.get('/',(req,res)=>{
    res.json(users);
}
)


router.get('/:id', (req, res) =>{
    const userId = parseInt ( req.params.id) ;
    const isfound = users.some (user => user. id === userId);
    if(isfound) {
    res.json(users.filter (user => user.id === userId));
    }
    else {
    res.status (480).json({msg: `no user with the of ${req.params.id}`})
    }
})

//* Create user
router.post('/',(req,res) =>{
    //res.send(req.body);
    const newUser = {
        id: uuid.v4(),
        name:req.body.name,
        email:req.body.email
    };

    if(!newUser.name || !newUser.email){
        return res.status(400).json({msg:'please use new name and email'})

    }
    users.push(newUser)
    res.json(users)

})


module.exports = router