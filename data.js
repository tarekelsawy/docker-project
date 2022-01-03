const mysql = require('mysql');
const express = require('express');
const app = express();
app.use(express.json());
const bodyparser = require('body-parser');


const port = process.env.PORT || 3000;
const mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'patient_management'    
});

mysqlConnection.connect((err)=>{
    if(!err){
        console.log('Database connected');
        app.get('/', (req, res) => {
            
            res.send('DB is connected you can access it')
        })
    } else{
        console.log('Database connection failed. there is a problem! \n Error : ' + JSON.stringify(err, undefined, 2));
    }
});


app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});