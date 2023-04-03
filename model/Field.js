const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fieldSchema = new Schema({
    fieldName: {
        type: String,
        required: true
    },
    
    altitude: {
        type: Number,
        required: true
    },
    gddGoal: {
        type: Number,
        default:450,
       
    },
    currentGdd:{
        type:Number,
        default:0
    },
    cuttingDateEstimated:{
        type:Number,
        default:0
    },
    
    
    lastCuttingDate:{
        type:String,
        required:true

    },
    lastSensorResetDate:{
        type:Date,
        default:new Date()
    },


    farmId:{
        type:Schema.Types.ObjectId,
        ref:'Farm',
        required:true
    },
    currentGdd:{
        type:Number,
        default:3
    },
    warnings:{
        type:Array,
        default:[]
    }
    

    
});

module.exports = mongoose.model('Field', fieldSchema);