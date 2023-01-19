const { Router } = require('express');
const express = require('express')
const router = express.Router()

//const users = require('../users.json');

const uuid = require('uuid')
const { users, saveUsers } = require('../users')

router.get('/', (req, res) => {
    res.json(users);
}
)


router.get('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const isfound = users.find(user => user.id === userId);
    if (isfound) {
        res.json(users.find(user => user.id === userId));
    }
    else {
        res.status(480).json({ msg: `no user with the of ${req.params.id}` })
    }
})

//* Create user
router.post('/', (req, res) => {
    //res.send(req.body);
    const newUser = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email
    };

    if (!newUser.name || !newUser.email) {
        return res.status(400).json({ msg: 'please use new name and email' })

    }
    users.push(newUser)
    saveUsers()
    res.json(users)

})

//* update user
router.put('/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id));

    if (found) {
        const upduser = req.body;
        users.forEach(user => {
            if (user.id === parseInt(req.params.id)) {
                user.name = upduser.name ? upduser.name : user.name;
                user.email = upduser.email ? upduser.email : user.email;
                saveUsers();
                res.json({ msg: "user updated", user })
            }
        })
    } else {
        res.status(400).json({ msg: `no user with this id of ${req.params.id} foumd` })
    }
})

//* delete user
router.delete('/:id', (req, res) =>{
    const found = users.find(user => user.id === parseInt(req.params.id));
    if(found){
        res.json({
            msg: 'user deleted',
            users: users.filter(user => user.id !== parseInt(req.params.id))
        })
    }else{
        res.status(400).json({msg:`no user found with id ${req.params.id}`})
    }
})


module.exports = router