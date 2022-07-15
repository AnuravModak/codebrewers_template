const mongoose = require("mongoose");
const schema =  mongoose.Schema();
const admin = new schema({
    quizzes: [{type: String}]
})