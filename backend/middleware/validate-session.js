const jwt = require('jsonwebtoken');
const User = require('../models/User');

const validateSession = async (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if (!token || !token.startsWith('Bearer ')) {
            return res.status(403).send({ auth: false, message: "Invalid token format or no token provided." });
        }

        const tokenWithoutBearer = token.substring(7); // Remove "Bearer " prefix
        let decoded;

        try {
            decoded = jwt.verify(tokenWithoutBearer, process.env.JWT);
        } catch (err) {
            if (err.name === 'TokenExpiredError') {
                return res.status(403).send({ auth: false, message: "Token expired." });
            } else {
                return res.status(403).send({ auth: false, message: "Failed to authenticate token." });
            }
        }

        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(403).send({ auth: false, message: "User not found." });
        }

        req.user = user;
        return next();
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: "Internal server error." });
    }
};

module.exports = validateSession;
