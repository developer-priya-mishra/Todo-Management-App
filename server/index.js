const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
require('dotenv').config();


const app = express();
app.use(express.json());            //to get data into json format
app.use(cors());

//Add port and connect to server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`Server is listening at port no : ${PORT}`));

mongoose.connect(
    process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: true

    },
    (err) => {
        if (err) throw err;
        console.log("MonoDb connected");
    }
)

app.use('/', require('./routes/todo_route'));