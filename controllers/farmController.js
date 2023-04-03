const Farm = require('../model/Farm');


const handleFarm = async (req, res) => {
    const { farmName,latitude,longitude,userId } = req.body;
    if (!farmName && !latitude && !longitude) return res.status(400).json({ 'message': 'Incomplate data' });

    
        const result = await Farm.create({
            "farmName": farmName,
            "latitude": latitude,
            "longitude": longitude,
            "userId":userId
        });

        res.status(201).json({'farmId':result._id, 'farmName':result.farmName, 'latitude':result.latitude, 'longitude':result.longitude,'userId':result.userId,'farmFields':result.farmFields});

    
}

module.exports = { handleFarm };