const express = require('express');
const app = express()

const morgan = require('morgan')
const { default: helmet } = require('helmet');
const compression = require('compression');




/// ----------------------------------init middleware
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())

/// init db


/// init router

app.get('/', (req, res, next) => {
    const strCompress = "Hello hihihi huhuhu"
    return res.status(200).json({
        message: "success ok",
        metadata: strCompress.repeat(10000)
    })
})

/// init error handlers

module.exports = app;

