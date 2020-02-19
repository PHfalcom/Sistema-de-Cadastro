const express = require('express')
const server = express()
const nunjucks = require('nunjucks')



nunjucks.configure('./', {
    express: server
})

server.use(express.static('public'))
server.get("/", function (req, res) {
    return res.render('index.html')
})


server.listen(3000)