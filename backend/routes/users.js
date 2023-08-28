

const router = require("express").Router();
const User = require('../models/User');
const bcrypt = require("bcrypt");
const { validateSession } = require('../middleware');

// Helpers
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

//UPDATE
router.put("/:id", validateSession, async (req, res) => {
    try {
        if (req.user._id !== req.params.id) {
            return res.status(401).json({ error: "You can update only your account!" });
        }
        if (req.body.password) {
            req.body.password = await hashPassword(req.body.password);
        }
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json({ error: "An error occurred while updating." });
    }
});

//DELETE
router.delete("/:id", validateSession, async (req, res) => {
    try {
        if (req.user._id !== req.params.id) {
            return res.status(401).json({ error: "You can delete only your account!" });
        }
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: "User not found!" });
        }
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "User has been deleted." });
    } catch (err) {
        res.status(500).json({ error: "An error occurred during deletion." });
    }
});

//GET USER
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json({ error: "An error occurred while fetching the user." });
    }
});

module.exports = router;
