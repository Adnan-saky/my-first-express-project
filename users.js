const fs = require('fs');

const users = [
    {id:1, name:'adnan', email:'adnan@gmail.com'},
    {id:2, name:'saky', email:'saky@gmail.com'},
    {id:3, name:'nzf', email:'nzf@gmail.com'},
    {id:4, name:'srt', email:'srt@gmail.com'},
]

const saveUsers = () => {
    fs.writeFileSync('users.json', JSON.stringify(users));
}

module.exports = { users, saveUsers };