//verifica el token
export const verifytoke = async (req, res, next) => {
  const token = req.headers["x-access-token"];
  console.log(token);
  if (!token) return res.status(403).json({ message: "token no valido" });
  next();
};
