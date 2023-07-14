import middleware from "../middleware";
import jwt from "jsonwebtoken";

async function handler(req, res) {
    if (!req.cookies.adminIdToken) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try {
        jwt.verify(req.cookies.adminIdToken, process.env.JWT_SECRET)
        res.status(200).end()
    } catch(ex) {
        console.error(ex)
        res.status(401).json({ message: "Unauthorized" });
    }
}

export default middleware(handler);