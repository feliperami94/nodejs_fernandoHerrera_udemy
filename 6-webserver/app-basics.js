const http = require('http');

http.createServer( (req, res) => {
    // res.writeHead(200, {'Content-type': 'text/plain'}); //Writes a header for the response
    // // res.writeHead(200, {'Content-type': 'application/json'}) //Writes a header to send json info
    // res.setHeader('Content-Disposition', 'attachment; filename=list.txt')
    // console.log(req)//Shows all the info about a http request
    
    // const person = {
    //     id: 1,
    //     name: 'Felipe'
    // }

    // res.write(JSON.stringify(person));

    


    res.end();
})
.listen( 8080 )

console.log('listening port: ', 8080);