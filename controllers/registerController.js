const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const loginController = require('../controllers/loginController');

const handleNewUser = async (req, res,next) => {
    const { username,password } = req.body;
    if (!username && !password) return res.status(400).json({ 'message': 'Username and password are required.' });

    // check for duplicate usernames in the db
    const duplicate = await User.findOne({ username: username }).exec();
    if (duplicate) return res.sendStatus(409); //Conflict 

    try {
        //encrypt the password
        const hashedPwd = await bcrypt.hash(password, 10);

        //create and store the new user
        const result = await User.create({
            "username": username,
            "password": hashedPwd
        });

        const accessToken = jwt.sign(
            {
                "username": result.username,
            },
            process.env.ACCESS_TOKEN_SECRET,
            
        );
        

        result.password=undefined;
        
        res.status(201).json({"username":result.username,'id':result._id,accessToken});
        
        

        // loginController.handleLogin({'username':result.username,'id':result.id})
        // req.body={'username':result.username,'password':result.password}
        // next();
        
        // res.status(201).json({'username':result.username,'id':result.id});


        
    } catch (err) {
        res.status(500).json({ 'bebado': err.message });
    }
}

module.exports = { handleNewUser };