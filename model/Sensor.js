const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sensorSchema = new Schema({
    
    isFaulty: {
        type: Boolean,
        required: false
    },
    serialNo: {
        type: String,
        required: true
    },
    batteryStatus: {
        type: String,
        default:"high"
    },
    gddGoal: {
        type: Number,
        required: true
    },
    latitude:{
        type:Number,
        required:true
    },
    longitude:{
        type:Number,
        required:true

    },
    
    currentGdd:{
        type:Number,
        default:0
        
    },
    lastCommunication:{
        type:Date,
        default:new Date()

    },
    sensorInstalationDate:{
        type:Date,
        default:new Date()

    },
    
    fieldId:{
        type:Schema.Types.ObjectId,
        ref:'Field'
    }

    
});

module.exports = mongoose.model('Sensor', sensorSchema);