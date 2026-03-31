import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
    try {

        const { token } = req.headers;

        if (!token) {
            return res.json({ success: false, message: "NOT Authorized, Login again" });
        }

        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        console.log(token_decode);

        if (token_decode.role !== "admin") {
            return res.json({ success: false, message: "NOT Authorized, Login again" });
        }

        next();

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export default adminAuth;