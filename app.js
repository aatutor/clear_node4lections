const express = require('express')
const app = express()
const fs = require('node:fs')
var port = 3141


app.get(`/`, (request, response) => {
    fs.readdir('pres', (err, files) => {
        if (err) {
            return console.log('bad reading', err)
        }
        var list = files.filter( (file) => file.endsWith('.html'));
        var body = '<body><ul>';
        list.forEach( (item) => {
            body += '<li><a href="' + item + '">' + item.slice(0, item.length-5) + '</a></li>\n';
        } );
        response.send(body);
    });
})
app.use(express.static(__dirname+'/pres'));

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})
