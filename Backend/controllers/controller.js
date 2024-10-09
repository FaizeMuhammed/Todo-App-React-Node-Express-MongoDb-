const todomodel=require('../models/Todomodel');


module.exports.getToDo= async (req,res)=>{
    const ToDo=await todomodel.find()
    res.send(ToDo);
}

module.exports.saveToDo= async (req,res)=>{
    
    const {text}=req.body

    todomodel.create({text})
    .then((data)=>{
        console.log('added sucsess');
        console.log(data);
        res.send(data)
        
        
    })
}

module.exports.updateToDo= async (req,res)=>{
    
    const {_id,text}=req.body


    todomodel.findByIdAndUpdate(_id,{text})
    .then(()=>
    
        res.send('update sucess')
        
        
    )
    .catch((err)=>console.log(err)
    )
}

module.exports.deleteToDo= async (req,res)=>{
    
    const {_id}=req.body


    todomodel.findByIdAndDelete(_id)
    .then(()=>
    
        res.send('delete sucess')
        
        
    )
    .catch((err)=>console.log(err)
    )
}