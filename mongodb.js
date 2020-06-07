// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
    //shorthand for the above 3 lines of code using destructuring 
const { MongoClient, ObjectID } = require('mongodb')

//connection url contains the name mongodb:// + ip address(localhost) + : + default localhost address(27017) 
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// //generating a new ID
// const id = new ObjectID()
// console.log(id.id.length)
// console.log(id.getTimestamp())
// console.log(id.toHexString().length)

//to form a connection between the mongo
    //1st arg takes the connection url, 2nd options and 3rd a callback funcn
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database!')
    }

    /************************** CREATE *********************************/
    //mongo creates a database for us
    //client.db takes only one argument ie, name of the database
    const db = client.db(databaseName)

    // //to create a database collection of name 'users' 
    // // insertOne is used to insert only one data to the database at a time.
    // //it can also take 3 args doc, options(it is optional if u want to insert or not) and a callback , here doc means doc to insert
    // db.collection('users').insertOne({
    //     
    //     name: "Vikram",
    //     Age: 27
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user')
    //     }

    //     //ops contains all the data stored
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: "Jane",
    //         Age: 28
    //     }, {
    //         name: "Joe",
    //         Age: 20
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(result.ops)
        
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Washing clothes',
    //         completed: true
    //     }, {
    //         description: 'Homework',
    //         completed: false
    //     }, {
    //         description: 'Shopping',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks!')
    //     }

    //     console.log(result.ops)
    // })


    /******************* READ ********************/

    // db.collection('users').findOne({_id: new ObjectID("5ece995dae131a4a18504d75")}, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch!')
    //     }

    //     console.log(user)
    // })

    // //find returns a curser that points towards the data and it has many functions for manupulating what we want
    // //toArray is a funcn of find which returns the array of matched datas
    // db.collection('users').find({ Age: 20 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({ Age: 20 }).count((error, users) => {
    //     console.log(users)
    // })

    // db.collection('tasks').findOne({_id: new ObjectID("5ece79264b08710d38a09cd8")}, (error, task) => {
    //     if (error) {
    //         console.log('Unable to find!')
    //     }

    //     console.log(task)
    // })

    // db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
    //     if (error) {
    //         console.log('Unable to find!')
    //     }

    //     console.log(tasks)
    // })


    /************************ UPDATE ****************************/

//     const updatePromise = db.collection('users').updateOne({
//         _id: new ObjectID("5ece6e01309e333c80c94915")
//     }, {
//         $set: {
//             name: 'Kanchan'
//         }
//     })

//     updatePromise.then((result) => {
//         console.log(result)
//     }).catch((error) => {
//         console.log(error)
//     })
// 

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5ece6e01309e333c80c94915")
    // }, {
    //     // $set: {
    //     //     name: 'Kanchan'
    //     // }
    //     $inc: {
    //         Age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({ 
    //     completed: false 
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })


    /************************* DELETE ******************************/

    // db.collection('users').deleteMany({
    //     Age: 20
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description: 'Washing clothes'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

})