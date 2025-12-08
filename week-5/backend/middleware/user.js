//  start writing from here
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET || "rahul123";

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, SECRET, (err, user) => {
            if (err) {
                res.status(403).json({
                    message: 'Frobidden: Inviled token'
                })
            } else {
                req.userId = user.userId;
                next();
            }
        })
    } else {
        res.status(401).json({
            message: 'Unauthorized: No token provided'
        })
    }
}

module.exports = {
    SECRET,
    authMiddleware
}
