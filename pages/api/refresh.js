import { createJWT, validateJwt } from '@/src/utils/JwtUtilts';

const refresh = (req, res) => {
  const idToken = req.cookies.idToken;
  if (!idToken) {
    // No authorization header present, return an error
    return res.status(401).json({ error: "Authorization header missing" });
  }

  let jwtInfo = validateJwt(idToken);
  if(jwtInfo.valid){
    return res.status(200).json({token: createJWT(jwtInfo.value.data, '2h')})
  }
  return res.status(401).json({ error: "Invalid token" });
};

export default refresh;