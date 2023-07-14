const jwt = require("jsonwebtoken");
export function validateJwt(jwtToken) {
  let isValid = false;
  let decoded = null;
  console.log("jwt secret", process.env.JWT_SECRET);
  try {
    decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);
    isValid = true;
  } catch (err) {
    // The token is invalid, return an error
    console.log("errr", err);
  }
  return { valid: isValid, value: decoded };
}

export function createJWT(payload, expires) {
  const token =
    jwt.sign({ data: payload }, process.env.JWT_SECRET, {
      expiresIn: expires,
    }) ?? null;
  return token;
}
