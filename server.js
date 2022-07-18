const express = require('express');
const mysql = require('mysq12');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extend: false }));
app.use(express.json());

const database = mysql.createConnection(
    {
        
    }
)