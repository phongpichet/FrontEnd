//Description: Node.js HTML client
//requires: npm install express ejs axios body-parser

const { default: axios } = require('axios');
const express = require('express');
const axios = require('axios');
var bodyParser = require('body-parser');
const res = require('express/lib/response');

//Base URL for the API
//const base_url ="https://api.example.com"
const base_url = "http:localhost:3000";

//Set the template engine
app.set('view engine','ejs');
app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: false}));

//Serve static files
app.use(express.static(__dirname + '/public'));

app.get("/",async (req,res) => {
    try{
        const response = await axios.get(base_url + '/books');
        res.render("books",{books: response.data});
    }catch(err){
        console.error(err);
        res.static(500).send('Error');
    }
});

