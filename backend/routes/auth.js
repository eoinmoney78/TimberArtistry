const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT = process.env.JWT;

// REGISTER
router.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        });

        const user = await newUser.save();
        const { password, ...others } = user._doc;

        // Generate JWT token for the user, including username
        const token = jwt.sign({ id: user._id, username: user.username }, JWT, { expiresIn: "1h" });

        // Log success and token (for debugging)
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

        const validated = await bcrypt.compare(req.body.password, user.password);
        if (!validated) return res.status(400).json({ message: "Invalid credentials" });

        const { password, ...others } = user._doc;

        // Generate JWT token for the user, including username
        const token = jwt.sign({ id: user._id, username: user.username }, JWT, { expiresIn: "24h" });

        // Log success and token (for debugging)
        console.log(`User logged in successfully: ${user.username}`);
        console.log(`Generated token: ${token}`);

        res.status(200).json({ ...others, token });
    } catch (err) {
        console.error(`Error logging in: ${err}`);
        res.status(500).json({ message: "Error logging in" });
    }
});

module.exports = router;
