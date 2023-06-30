const mongoose = require("mongoose");

const ToDoSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    }
});

module.exports = ToDo = mongoose.model("todo", ToDoSchema);