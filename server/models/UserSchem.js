var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchem = new Schema({
    username:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('user3',UserSchem);