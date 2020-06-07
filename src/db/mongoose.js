const mongoose = require('mongoose')
//const validator = require('validator')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})


// //basic version of user model
// const User = mongoose.model(/*name_of_model*/'User', {
//     //name_of_fields
//     name:{
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value) {
//             if(!validator.isEmail(value)) {
//                 throw new Error('Email is invalid')
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if(value < 0) {
//                 throw new Error('Age must be a positive number')
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 6,
//         validate(value) {
//             if(value.toLowerCase().includes('password')) {
//                 throw new Error('Password must not contain the word password itself!')
//             }
//         }
//     }
// })

// const me = new User({
//     name: '  Pallavi   ',
//     email: 'PALLAVI@GMAIL.IO    ',
//     password: 'p433     '
// })

// //save method dosen't take any arg but it returns a promise which we can use if required
// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!',error)
// })


//basic version of task model
// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })

// const taskOne = new Task ({
//     description: 'Homework      ',
//     completed: true
// })

// taskOne.save().then(() => {
//     console.log(taskOne)
// }).catch((error) => {
//     console.log('Error!', error)
// })