const jwt = require("jsonwebtoken");

const allowedRoutes = (req) => {
  if (req.url.startsWith("/api/student")) {
    return true;
  } else if (req.url.startsWith("/api/course")) {
    return true;
  }else if (req.url.startsWith("/api/assignments")) {
    return true;
  }else if (req.url.startsWith("/api/batch")) {
    return true;
  }else if (req.url.startsWith("/api/attendance")) {
    return true;
  }else if (req.url.startsWith("/api/live_classes")) {
    return true;
  }
  return false;
};
const middleware = (handler) => async (req, res) => {
  if (req.url === "/api/student/login") {
    return handler(req, res);
  }
  const session = req.cookies.idToken;
  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  // check if the route is authorized
  if (!allowedRoutes(req)) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const tokenPayload = jwt.decode(session, process.env.JWT_SECRET).data
  req.student_username = tokenPayload.student_username
  // console.log("authorization ", req.headers.authorization);
  return handler(req, res);
};

export default middleware;
