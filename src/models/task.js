const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        //to set up a relation between user and tasks by providing the id to every task
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User' //ref is used to refer to some other models ie creating a relationship b/w 2 models
    }
}, {
    timestamps: true
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task