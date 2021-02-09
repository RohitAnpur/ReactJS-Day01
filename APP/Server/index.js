
const { response } = require('express');
const express = require('express')
const path =require('path');
const DIR_DIST =path.join(__dirname,'../dist');
const HTML_STATIC=path.join(DIR_DIST, 'index.html');
const port =8000;
const data = require('./../Data/data.json')
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(DIR_DIST));
app.get('/',function(request, resposne ){

    response.sendFile(HTML_STATIC);

    //resposne.send('you are on the root route');
});

app.get('/getemployees', function(request, response) {
response.send(data);
});

app.post('/addnewemployee', function(request, response) {
    let empName = request.body.empName;
    let empPwd = request.body.empPwd;
    response.end(`Post success , you sent ${empName} and ${empPwd}, Thanks!`);
});

app.listen(port, () => {
console.log("Listening " + port );

})

