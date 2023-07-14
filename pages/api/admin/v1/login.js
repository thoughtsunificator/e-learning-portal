import { db } from "@/src/utils/firebase";
import middleware from "../middleware";
import { dbCollection } from "@/src/shared/Constants";
import jwt from "jsonwebtoken";
import { scryptSync } from "node:crypto"

async function handler(req, res) {
  const { method, body } = req;
  if (method === "POST") {
    let admin_cred = body;
    if (admin_cred?.username && admin_cred?.password) {
      const admin = await db.collection(dbCollection.admin).doc(admin_cred?.username).get();
      if(admin.exists) {
        const derivedKey = scryptSync(admin_cred?.password, process.env.SCRYPT_SALT, 64)
        if (admin.data()["password"] === derivedKey.toString("hex")) {
            res.status(200).json({
              token: createJWT(admin_cred?.username, "2h"),
              idToken: createJWT(admin_cred?.username, "24h"),
              username: admin_cred?.username,
              isAdmin: true,
            })
          } else {
            res.status(401).json({ message: "Unauthorized request" })
          }
        } else {
          res.status(401).json({ message: "Unauthorized request" })
        }
      }
  } else {
    res
      .status(401)
      .json({
        message: "something went wrong ! unable to login please try later",
      });
  }
}

function createJWT(admin_info, expires) {
  const token =
    jwt.sign(
      { data: { admin_info, admin_user: true } },
      process.env.JWT_SECRET,
      {
        expiresIn: expires,
      }
    ) ?? null;
  return token;
}
export default middleware(handler);
