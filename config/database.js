const mongoose = require('mongoose')

const conn = async()=>{
    //mongoAtlas
    const atlas = await mongoose.connect('mongodb+srv://useradmin:Dodge1313@fiaptecnico.hsj9v.mongodb.net/todolist')
}

module.exports = conn