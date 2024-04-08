import Users from "../Model/User-Client.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
export const signup = async (req, res) => {
  const {
    email,
    password,
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

  // hashing the password
  const passwordHash = await bcrypt.hash(password, 10);

  const userFound = await Users.findOne({ email });

  if (userFound)
    return res.status(400).json({
      message: ["el Correo ya Existe"],
    });

  const newUser = new Users({
    email: email,
    password: passwordHash,
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
    ingreso: parseInt(ingreso),
    otrosingresos: otrosingresos,
    poseeinmueble: poseeinmueble,
    valorinmueble: parseInt(valorinmueble),
    poseevehiculo: poseevehiculo,
    valorvehiculo: parseInt(valorvehiculo),
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
    ingresosanuales: parseInt(ingresosanuales),
    totalactivos: parseInt(totalactivos),
  });

  //guardar token
  try {
    const saveUser = await newUser.save();
    console.log(saveUser);
    const token = await createAccessToken({
      id: saveUser._id,
    });

    res.cookie("token", token, {
      httpOnly: "development",
      secure: true,
      sameSite: "none",
    });

    res.json({
      id: saveUser._id,
      nombre: saveUser.nombre,
      apellido: saveUser.apellido,
      email: saveUser.email,
    });
  } catch (error) {
    res.json(error);
  }
};

//iniciar session

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await Users.findOne({ email });

    if (!userFound)
      return res.status(400).json({
        message: ["No Existe Registrado el Correo"],
      });

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch) {
      return res.status(400).json({
        message: ["Contraseña Incorrecta"],
      });
    }

    const token = await createAccessToken({
      id: userFound._id,
      nombre: userFound.nombre,
      apellido: userFound.apellido,
    });

    res.cookie("token", token, {
      httpOnly: "development",
      secure: true,
      sameSite: "none",
    });

    res.json({
      id: userFound._id,
      nombre: userFound.nombre,
      apellido: userFound.apellido,
      email: userFound.email,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.send(false);

  jwt.verify(token, "claveSecreta", async (error, user) => {
    if (error) return res.sendStatus(401);

    const userFound = await Users.findById(user.id);
    if (!userFound) return res.sendStatus(401);

    return res.json({
      id: userFound._id,
      nombre: userFound.nombre,
      apellido: userFound.apellido,
      email: userFound.email,
    });
  });
};

export const logout = async (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    secure: true,
    expires: new Date(0),
  });
  return res.sendStatus(200);
};
