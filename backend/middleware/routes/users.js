const router = require("express").Router();
const User = require('../middleware/models/User');
// const Post = require("../models/Post");
const bcrypt = require("bcrypt");

const JWT = process.env.JWT;
const { validateSession } = require('../middleware');

// UPDATE
router.put("/:id", validateSession, async (req, res) => {
    const userId = req.params.id;
    const requestingUserId = req.user._id.toString();

    if (userId !== requestingUserId) {
        return res.status(401).json({ error: "You can update only your account!" });
    }

    try {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }

        const updatedUser = await User.findByIdAndUpdate(userId, { $set: req.body }, { new: true });
        res.status(200).json(updatedUser);
    } catch (err) {
        console.error(`Error updating user: ${err}`);
        res.status(500).json({ error: "An error occurred while updating." });
    }
});

// DELETE
router.delete("/:id", validateSession, async (req, res) => {
    const userId = req.params.id;
    const requestingUserId = req.user._id.toString();

    if (userId !== requestingUserId) {
        return res.status(401).json({ error: "You can delete only your account!" });
    }

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found!" });
        }

        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(userId);
        res.status(200).json({ message: "User has been deleted..." });
    } catch (err) {
        console.error(`Error deleting user: ${err}`);
        res.status(500).json({ error: "An error occurred during deletion." });
    }
});

// GET USER
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: "User not found!" });
        }
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        console.error(`Error fetching user: ${err}`);
        res.status(500).json({ error: "An error occurred while fetching the user." });
    }
});

module.exports = router;
