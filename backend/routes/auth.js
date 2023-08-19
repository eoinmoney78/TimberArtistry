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
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return res.status(400).json({ message: "Invalid credentials" });
        console.log('Hashed Password from Database:', user.password);
        console.log('Password from Login Request:', req.body.password);
        const validated = await bcrypt.compare(req.body.password, user.password);
        if (!validated) return res.status(400).json({ message: "Invalid credentials" });

        const { password, ...others } = user._doc;

        const token = jwt.sign({ id: user._id, username: user.username }, JWT, { expiresIn: "24h" });

        console.log(`User logged in successfully: ${user.username}`);
        console.log(`Generated token: ${token}`);

        res.status(200).json({ ...others, token });
    } catch (err) {
        console.error(`Error logging in: ${err}`);
        res.status(500).json({ message: "Error logging in" });
    }
});

module.exports = router;
