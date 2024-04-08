//generar carpeta
import multer from "multer";
import fs from "fs";

const generarNombreCarpeta = (req) => {
  const now = new Date();
  const dia = now.getFullYear();
  const mes = (now.getMonth() + 1).toString().padStart(2, "0");
  const año = now.getDate().toString().padStart(2, "0");
  const hora = now.getHours().toString().padStart(2, "0"); // Agregar ceros a la izquierda si es necesario
  const minuto = now.getMinutes().toString().padStart(2, "0"); // Agregar ceros a la izquierda si es necesario
  const segundo = now.getSeconds().toString().padStart(2, "0"); // Agregar ceros a la izquierda si es necesario
  return `${dia}-${mes}-${año}-${hora}-${minuto}-${segundo}`;
};

//configurar directorio
export const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const nombreCarpeta = generarNombreCarpeta();
    const ruta = `src/archivos/${nombreCarpeta}`;
    cb(null, ruta);
    if (!fs.existsSync(ruta)) {
      fs.mkdirSync(ruta, { recursive: true });
    }
    cb(null, ruta); // Directorio donde se guardarán los archivos
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Nombre de archivo único
  },
});

//filtrar achivos pdf o jpg
export const fileFilter = function (req, file, cb) {
  if (file.mimetype === "application/pdf" || file.mimetype === "image/jpeg") {
    cb(null, true); // Aceptar el archivo
  } else {
    cb(new Error("Solo se permiten archivos PDF y JPG"), false); // Rechazar el archivo
  }
};
// Configuración completa de Multer
export const upload = multer({ storage: storage, fileFilter: fileFilter });
