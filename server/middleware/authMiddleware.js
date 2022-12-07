const admin = require("../config/firebase-config");

const authMiddleware = async (request, response, next) => {
  const headerToken = request.headers.authorization;
  if (!headerToken) {
    return response.send({ message: "No token provided" }).status(401);
  }

  if (headerToken && headerToken.split(" ")[0] !== "Bearer") {
    response.send({ message: "Invalid token" }).status(401);
  }

  const token = headerToken.split(" ")[1];

  try {
    decodedValue = await admin.auth().verifyIdToken(token);
    // console.log("decoded value", decodedValue);
    request.user = decodedValue;
    if (decodedValue) {
      return next();
    }
  } catch (error) {
    response.status(403).json({ message: "Could not authorize" });
  }
};

module.exports = authMiddleware;
