const User = require('../models/usermodel');

exports.userRegister = async (req, res) => {
    try {
        const { name, email, role, password, confirmpassword } = req.body;
        const newUser = new User({
            name,
            email,
            role,
            password,
            confirmpassword,
        });

        const savedUser = await newUser.save();
        res.status(201).json({ message: "User registered succesfully", data: savedUser });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email });

        if (!existingUser || existingUser.password !== password) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        res.status(200).json({ message: 'Login successful', data: existingUser });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
