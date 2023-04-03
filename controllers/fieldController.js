const Field = require('../model/Field');
const Sensor = require('../model/Sensor');


const handlePostField = async (req, res) => {
    const { fieldName,altitude,farmId,lastCuttingDate } = req.body;
    if (!fieldName && !altitude  && !farmId && !lastCuttingDate) return res.status(400).json({ 'message': ' from Incomplate data.' });

    
       
        const  date1 = new Date()
        const  date2 = new Date(lastCuttingDate)
        const diff = date2.getTime() - date1.getTime();
        
        const toCuttingDate = Math.ceil(diff / (1000 * 3600 * 24));
        console.log("from this one",toCuttingDate)

        const result = await Field.create({
            "fieldName": fieldName,
            "altitude": altitude,
            "lastCuttingDate":lastCuttingDate,
            "farmId":farmId,
            "cuttingDateEstimated": toCuttingDate
        });

       

        res.status(201).json({fieldId:result._id,fieldName:result.fieldName,altitude:result.altitude,gddGoal:result.gddGoal,cuttingDateEstimated:result.cuttingDateEstimated,lastSensorReset:result.lastSensorResetDate, farmId:result.farmId});
    
}

const handleGetFields=async(req,res) => {
    const {farmId} = req.params

    const fields = await Field.find({farmId})
    
   
    res.status(200).json(fields)

}

module.exports = { handlePostField ,handleGetFields};