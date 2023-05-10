const fs = require('fs')

const data  = JSON.parse(fs.readFileSync('data.json','utf-8'));

const users = data.users


exports.getItem = (req,res)=>{
    const userIndex =  Number(req.params.id)
    const user = users.find(user=>user.id ===userIndex) 
    res.json(user)
}

exports.getAllItems =(req,res)=>{
    res.json(users)
}


exports.insertItem = (req,res)=>{    
    users.push(req.body)
    res.json(req.body)
}

exports.deleteItem = (req,res)=>{
    const id = +req.params.id;
    const userIndex = users.findIndex(u=>u.id === id)
    const user = users[userIndex]
    users.splice(userIndex,1)

    res.status(201).json({...user,delete:"success"})


}

exports.updateItem = (req,res)=>{
    const id = +req.params.id;
    const userIndex = users.findIndex(p=>p.id === id)
    const name = users[userIndex]
    users.splice(userIndex,1,{...name,...req.body})

    res.status(201).json({update:"success"})


}

exports.replaceItem = (req,res)=>{
    const id = +req.params.id;
    const userIndex = users.findIndex(p=>p.id === id)
    users.splice(userIndex,1,{...req.body,id:id})

    res.status(201).json({update:"success"})


}
