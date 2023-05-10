const fs = require('fs')

const  model  = require('../model/todo');

const Todo = model.Todo

exports.insertItem = async (req,res)=>{    
    
    const todo = new Todo(req.body)
    


    try{
        const a1 = await todo.save()
        res.status(201).json(a1)
    } catch(err){
        res.status(400).json(err)
        console.log(err,'what we get')
    }
    
}

exports.getItem = async(req,res)=>{
    const index =  req.params.id

    const todo = await Todo.findById(index)

    res.status(201).json(todo);
    
}

exports.getAllItems =async(req,res)=>{
    
    try {
        const doc = await Todo.find()
        res.status(201).json(doc);

    } catch (error) {
        console.log(err)
        res.status(401).json(err);
    }



}



exports.deleteItem = async(req,res)=>{
    const id = req.params.id;
    
    try{
        const doc = await Todo.findOneAndDelete(id);
        console.log({delete:"success"},doc)
        res.status(202).json({delete:"success",...doc})

    }catch(err){
        console.log({delete:"failted"},err);
        res.status(401).json(err);
    }




}

exports.updateItem = async(req,res)=>{
    try{
        const id = req.params.id;
     
        const doc = await Todo.findOneAndUpdate({_id: id},req.body,{new:true});

        console.log(doc,"caijndoiscoisdcoisdjidjiosdjciodj")
        res.status(200).json(doc);



    }catch(err){
        console.log(err);
        res.status(401).json(err);
    }
    

}

exports.replaceItem = async(req,res)=>{
    const id = req.params.id;
    
    const doc  = await Todo.findOneAndReplace(id,req.body,{new:true})

    try{
        console.log(doc)
        res.status(201).json(doc);

    }catch(err){
        console.log(err)
    }


}
