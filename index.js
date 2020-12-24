const http = require('http')
const PORT = 3000;
const fs = require('fs')


const server = http.createServer(function(req, res){
    res.writeHead(200, {'content-Type': 'text/html'})
    fs.readFile('index.html', function(error, data){
        if (error){
            res.writeHead(404)
            res.write('Error: File not found')
        }else{
            res.write(data)
        }
        res.end()
    })
})

server.listen(PORT, function(error){
    if (error){
        console.log('Something went wrong', error)

    }else{
        console.log('Server is running on development mode on port ' + PORT)
    }
})