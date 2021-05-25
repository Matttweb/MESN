import jwt from 'jsonwebtoken';

export const TokenValidation = (req, res, next) => {
    try {
        const token = req.header("Authorization");
        const payload = jwt.verify(
            token,
            process.env.TOKEN_SECRET
        );
        req.userId = payload._id;
        next();
    } catch (error) {
        res.status(401).json(error)
    }
}