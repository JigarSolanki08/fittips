const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true,
        default:"update mobile no"
    },
    exercise: {
        type: String,
        required: true,
        default:"Running"
    },
    description: {
        type: String,
        required: true,
        default:"Running is a popular form of cardiovascular exercise that involves rapid movement of the legs in a coordinated manner, typically in a forward direction. It is a natural human activity and one of the most accessible forms of exercise, requiring minimal equipment besides a good pair of running shoes."
    },
    duration: {
        type: String,
        required: true,
        default:"If you're new to running, start with shorter sessions (e.g., 20-30 minutes) at a comfortable pace, 2-3 times per week. Gradually increase the duration and intensity as your fitness improves."
    }
});

const users = new mongoose.model("users",userSchema);


module.exports = users;
