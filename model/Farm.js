const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const farmSchema = new Schema({
    farmName: {
        type: String,
        required: true
    },
    
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    farmFields:{
        type:Array,
        default:null
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
    
});

module.exports = mongoose.model('Farm', farmSchema);