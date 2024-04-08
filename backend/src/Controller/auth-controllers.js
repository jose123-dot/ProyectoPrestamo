import Users from "../Model/User-Client.js";
import modelroles from "../Model/roles-model.js";

import jwt from "jsonwebtoken";
import config from "../secret.js";
export const signup = async (req, res) => {
  const {
    username,
    email,
    password,
    roles,
    nombre,
    apellido,
    apodo,
    nacionalidad,
    sexo,
    tipodocumento,
    documento,
    ocupacion,
    telefonoresidencial,
    celular,
    direccion,
    noresidencia,
    sector,
    municipio,
    provincia,
    direccionfamiliar,
    cargotrabajo,
    direcciontrabajo,
    ingreso,
    otrosingresos,
    poseeinmueble,
    valorinmueble,
    poseevehiculo,
    valorvehiculo,
    nombreEmpresa,
    direccionEmpresa,
    RNC,
    telefonoEmpresa,
    correoEmpresa,
    fax,
    actividad,
    sitioweb,
    fechafundacion,
    paisfundacion,
    ingresosanuales,
    totalactivos,
  } = req.body;

  const newUser = new Users({
    username: username,
    email: email,
    password: await Users.encryptPassword(password),
    nombre: nombre,
    apellido: apellido,
    apodo: apodo,
    nacionalidad: nacionalidad,
    sexo: sexo,
    tipodocumento: tipodocumento,
    documento: documento,
    ocupacion: ocupacion,
    telefonoresidencial: telefonoresidencial,
    celular: celular,
    direccion: direccion,
    noresidencia: noresidencia,
    sector: sector,
    municipio: municipio,
    provincia: provincia,
    direccionfamiliar: direccionfamiliar,
    cargotrabajo: cargotrabajo,
    direcciontrabajo: direcciontrabajo,
    ingreso: ingreso,
    otrosingresos: otrosingresos,
    poseeinmueble: poseeinmueble,
    valorinmueble: valorinmueble,
    poseevehiculo: poseevehiculo,
    valorvehiculo: valorvehiculo,
    nombreEmpresa: nombreEmpresa,
    direccionEmpresa: direccionEmpresa,
    RNC: RNC,
    telefonoEmpresa: telefonoEmpresa,
    correoEmpresa: correoEmpresa,
    fax: fax,
    actividad: actividad,
    sitioweb: sitioweb,
    fechafundacion: fechafundacion,
    paisfundacion: paisfundacion,
    ingresosanuales: ingresosanuales,
    totalactivos: totalactivos,
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
  try {
    const saveUser = await Users.create(newUser);
    console.log(saveUser);
    const token = jwt.sign({ id: saveUser._id }, config.SECRET, {
      expiresIn: 86400,
    });
    res.status(200).json({ token });
  } catch (error) {
    res.json(error);
  }
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
