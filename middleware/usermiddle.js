const User = require('../models/usermodel'); 

exports.checkRegister = async(req, res, next) => {
    try {
        const { name, email, role, password, confirmpassword } = req.body;

        if (!name || !email || !password || !confirmpassword) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email is already registered' });
        }

        if (role && !['user', 'admin'].includes(role)) {
            return res.status(400).json({ message: 'Invalid role' });
        }
        if (password.length > 8 ) {
            return res.status(400).json({ message: 'Password must be at least 8 characters long' });
        }
        if (password !== confirmpassword) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }

        next();
    } catch (error) {
        res.status(500).json({
            status: 500,
            message:"internal server error"
        })
    }
};


exports.checkUserLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }
        next();
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Internal server error',
        });
    }
};