const express = require('express')
const { connectToDb, getDb } = require('./db')

const app = express()

//db connections
let db

connectToDb((err) => {
    if (!err){
        app.listen(3000, () => {
            console.log('app listening on port 3000')
        })
        db = getDb()
    }
})

//routes
app.get('/Products', (req, res) => {
    let productArr = []

    db.collection('Products')
    .find()
    .forEach(product => productArr.push(product))
    .then(() => {
        res.status(200).json(produktArr)
    })
    .catch(() => {
        res.status(500).json({error: 'Could not fetch items'})
    })
})