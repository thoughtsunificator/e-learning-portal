const jwt = require("jsonwebtoken");

const allowedRoutes = (req) => {
  return true;
};
const middleware = (handler) => async (req, res) => {
  if (req.url === "/api/admin/v1/login") {
    return handler(req, res);
  }
  if (!req.cookies.adminIdToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
      jwt.verify(req.cookies.adminIdToken, process.env.JWT_SECRET)
      // check if the route is authorized
      if (!allowedRoutes(req)) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      // console.log("authorization ", req.headers.authorization);
      return handler(req, res);
  } catch(ex) {
      console.error(ex)
      return res.status(401).json({ message: "Unauthorized" });
  } 
};

export default middleware;
