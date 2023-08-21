


const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

const generateToken = (user) => jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: "1h" });

router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, email, password: hashedPassword });
        const user = await newUser.save();

        const { password: _, ...userWithoutPassword } = user._doc;
        const token = generateToken(user);
        res.status(201).json({ ...userWithoutPassword, token });
    } catch (err) {
        const message = err.name === 'ValidationError' ? err.message : "Error registering user";
        res.status(500).json({ message });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Email or Password does not match" });
        }

        const token = generateToken(user);
        const { password: _, ...userWithoutPassword } = user._doc;
        res.status(200).json({ ...userWithoutPassword, token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
