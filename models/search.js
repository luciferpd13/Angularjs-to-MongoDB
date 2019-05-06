var mongoose = require('mongoose');

//Schema For DataBase
var schema = {
    city : {
        type: String,
        required : true
    }
}

var Search = mongoose.model("search", schema);

module.exports = Search;