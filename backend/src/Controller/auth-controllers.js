import Users from "../Model/User-Model.js";
import modelroles from "../Model/roles-model.js";

import jwt from "jsonwebtoken";
import config from "../secret.js";
export const signup = async (req, res) => {
  const { username, email, password, roles } = req.body;
  const newUser = new Users({
    username: username,
    email: email,
    password: await Users.encryptPassword(password),
  });

  //verfica la existencia de roles
  if (modelroles) {
    const foundRoles = await modelroles.find({ nombre: { $in: roles } });
    newUser.roles = foundRoles.map((role) => role._id);
  } else {
    const role = await modelroles.findOne({ nombre: "user" });
    newUser.roles = [role.id];
  }

  //guardar token
  const saveUser = await Users.create(newUser);
  console.log(saveUser);
  const token = jwt.sign({ id: saveUser._id }, config.SECRET, {
    expiresIn: 86400,
  });
  res.status(200).json({ token });
};

//iniciar session
export const signin = async (req, res) => {
  //verificar existencia del Usuario
  const userFound = await Users.findOne({ email: req.body.email }).populate(
    "roles"
  );
  if (!userFound)
    return res.status(200).json({ message: "Usuario no Encontrado" });
  /* comparar las passwords */
  const matchpassword = await Users.comparepassword(
    req.body.password,
    userFound.password
  );
  if (!matchpassword)
    return res
      .status(401)
      .json({ token: null, message: "contraseña invalida" });

  const token = jwt.sign({ id: userFound._id }, config.SECRET, {
    expiresIn: 86400,
  });
  console.log(userFound);
  res.json({ token });
};
