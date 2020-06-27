const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const eventSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        require: true
    },
    environment: {
        type: String,
        require: false
    },
    component: {
        type: String,
        require: false
    },
    message : {
        type: String,
        require: false
    },
    createdAt:{
        type:Date
    },
    data: {
        type: Object,
        require: false
    }   
})

module.exports = mongoose.model('Event', eventSchema);