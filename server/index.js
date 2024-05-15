const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const connectDb = require('./db.js')
const employeeRoutes = require('./controllers/employee.controller')
const { errorHandler } = require('./middlewares')

const app = express()

app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:4200'}))
app.use('/api/employees', employeeRoutes)
app.use(errorHandler)


connectDb()
    .then(() => {
        console.log('Connected na poya ey')
        app.listen(3000,
            () => console.log('server started at 3000.'))
    })
    .catch(err => console.log(err))