

const jwt = require('jsonwebtoken');
const User = require('../models/User');

const BEARER_PREFIX = "Bearer ";
const JWT_SECRET = process.env.JWT_SECRET;

const validateSession = async (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if (!token || !token.startsWith(BEARER_PREFIX)) {
            return res.status(401).send({ auth: false, message: "Invalid token format or no token provided." });
        }

        const tokenWithoutBearer = token.slice(BEARER_PREFIX.length);
        const decoded = jwt.verify(tokenWithoutBearer, JWT_SECRET);

        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(401).send({ auth: false, message: "User not found." });
        }

        req.user = user;
        return next();
    } catch (err) {
        let status = 500;
        let message = "Internal server error.";

        if (err.name === 'TokenExpiredError') {
            message = "Token expired.";
            status = 401;
        } else if (err.status && err.message) {
            message = err.message;
            status = err.status;
        }

        return res.status(status).send({ auth: false, message });
    }
};

module.exports = validateSession;
