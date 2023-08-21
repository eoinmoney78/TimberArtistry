// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// const validateSession = async (req, res, next) => {
//     try {
//         const token = req.headers.authorization;

//         if (!token || !token.startsWith('Bearer')) {
//             return res.status(403).send({ auth: false, message: "Invalid token format or no token provided." });
//         }

//         const tokenWithoutBearer = token.substring(7); // Remove "Bearer " prefix
//         let decoded;

//         try {
//             decoded = jwt.verify(tokenWithoutBearer, process.env.JWT);
//         } catch (err) {
//             if (err.name === 'TokenExpiredError') {
//                 return res.status(403).send({ auth: false, message: "Token expired." });
//             } else {
//                 return res.status(403).send({ auth: false, message: "Failed to authenticate token." });
//             }
//         }

//         const user = await User.findById(decoded.id);

//         if (!user) {
//             return res.status(403).send({ auth: false, message: "User not found." });
//         }

//         req.user = user;
//         return next();
//     } catch (err) {
//         console.error(err);
//         return res.status(500).send({ message: "Internal server error." });
//     }
// };

// module.exports = validateSession;


const jwt = require('jsonwebtoken');
const User = require('../models/User');

const BEARER_PREFIX = "Bearer ";
const JWT_SECRET = process.env.JWT_SECRET; // Rename for clarity

const validateSession = async (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if (!token || !token.startsWith(BEARER_PREFIX)) {
            throw { status: 401, message: "Invalid token format or no token provided." };
        }

        const tokenWithoutBearer = token.slice(BEARER_PREFIX.length);
        let decoded;

        try {
            decoded = jwt.verify(tokenWithoutBearer, JWT_SECRET);
        } catch (err) {
            let message = "Failed to authenticate token.";
            if (err.name === 'TokenExpiredError') {
                message = "Token expired.";
            }
            throw { status: 401, message };
        }

        const user = await User.findById(decoded.id);
        if (!user) {
            throw { status: 401, message: "User not found." };
        }

        // Attach user to the request object
        req.user = user;
        return next();
    } catch (err) {
        console.error(err.message || err);
        const status = err.status || 500;
        const message = err.message || "Internal server error.";
        return res.status(status).send({ auth: false, message });
    }
};

module.exports = validateSession;
