const Sensor = require('../model/Sensor');
const Field = require('../model/Field');


const updateField = async(fieldId,result)=>{
    const field=await Field.findById(fieldId)
    console.log('abay')
    console.log(field)
    if((field.gddGoal-field.currentGdd)>(result.gddGoal-result.currentGdd)){
        await Field.findByIdAndUpdate(fieldId,{gddGoal:result.gddGoal,currentGdd:result.currentGdd})
    }

}

const handlePostSensor = async (req, res) => {
    const { serialNo,gddGoal,latitude,longitude,fieldId } = req.body;
    if (!serialNo && !gddGoal  && !latitude && !longitude && !fieldId) return res.status(400).json({ 'message': ' Sensor Incomplate data.' });

    
       
        

        const result = await Sensor.create({
            serialNo,
            gddGoal,
            latitude,
            longitude,
            fieldId
        });

        await updateField(fieldId, result);

        res.status(201).json(result);
    
}

const handleGetSensors=async(req,res) => {
    const fields = await Sensor.find({})
    res.status(200).json(fields)
}

module.exports = { handlePostSensor ,handleGetSensors};