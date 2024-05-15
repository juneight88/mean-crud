const mongoose = require('mongoose')

const dbUri = 'mongodb+srv://jaranillajuneight2:meanstack123@cluster0.ezerpcf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.set('strictQuery', false)

module.exports = () => {
    return mongoose.connect(dbUri,
        { useNewUrlParser: true, useUnifiedTopology: true })
}