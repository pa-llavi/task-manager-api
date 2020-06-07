const express = require('express')
//connecting to the database
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT // || 3000

// //middleware function to enable authontication
// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// //middleware for maintanence msg
// app.use((req, res, next) => {
//     res.status(503).send('Site under maintanence. Plese try back later.')
// })

//     //to upload a file document
// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.doc|docx$/)) {
//             return cb(new Error('Please upload a word document'))
//         }

//         cb(undefined, true)

//         // cb(new Error('File must be a PDF'))
//         // cb(undefined, true)
//         // cb(undefined, false)
//     } 
// })
// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message })
// })



//to access the data passed 
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

//
//Without middleware: new request -> run route handler
//
//With middleware: new request -> do something -> run route handler
//

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//    const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days' })
//    console.log(token)

//    const data = jwt.verify(token, 'thisismynewcourse')
//    console.log(data)
// }

// myFunction()

// const pet = {
//     name: "Hal"
// }

// pet.toJSON = function () {
//     return {}
// }

// console.log(JSON.stringify(pet))

// //relation b/w task and user
// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('5ed942ec2a795f0f9877884e')
//     // await task.populate('owner').execPopulate() //populate allow us to populate data from a relationship
//     // console.log(task.owner)

//     const user = await User.findById('5ed942c42a795f0f9877884c')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()