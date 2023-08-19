const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT = process.env.JWT;

// REGISTER
router.post("/register", async (req, res) => {
    try {
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPass = bcrypt.hashSync(req.body.password, salt);



        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        });

        const user = await newUser.save();
        console.log("User registered:", user.username);
        const { password, ...others } = user._doc;

        const token = jwt.sign({ id: user._id, username: user.username }, JWT, { expiresIn: "1h" });

        console.log(`User registered successfully: ${user.username}`);
        console.log(`Generated token: ${token}`);

        res.status(201).json({ ...others, token });
    } catch (err) {
        if (err.name === 'ValidationError') {
            return res.status(400).json({ message: err.message });
        }
        console.error(`Error registering user: ${err}`);
        res.status(500).json({ message: "Error registering user" });
    }
});

// LOGIN
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });

        if (!user) throw new Error('Email or Password does not match');
        const passwordCheck = await bcrypt.compare(password, user.password);

        if (!passwordCheck) throw new Error('Email or Password does not match');

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT, { expiresIn: 60 * 60 * 24 });

        email ?
            res.status(200).json({
                user,
                token,
                isAdmin: user.isAdmin
            }) :
            res.status(404).json({
                message: "Something went wrong"
            });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            Error: err.message
        });
    }
});
module.exports = router;
