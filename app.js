const express = require('express')
const app = express()
const fs = require('node:fs')
var port = 3141


app.get(`/`, (request, response) => {
    var url = request.url;//.slice(1);
    console.log(url);

    fs.readdir('pres', (err, files) => {
        var list = files.filter( (file) => file.endsWith('.html'));
        // console.log(list);
        var body = '<body><ul>';
        list.forEach( (item) => {
            body += '<li><a href="' + item + '">' + item.slice(0, item.length-5) + '</a></li>\n';
        } );
        // console.log(body);
        response.send(body);
    });
    // response.send('hello world');
})

app.use(express.static(__dirname+'/pres'));
app.use(express.static(__dirname+'/files'));

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }    
    console.log(`server is listening on ${port}`)
})
