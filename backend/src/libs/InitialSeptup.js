import roles from "../Model/roles-model.js";
/* guardar roles */
export const createRol = async () => {
  try {
    const count = await roles.estimatedDocumentCount();

    if (count > 0) return;
    const values = await Promise.all([
      new roles({ nombre: "user" }).save(),
      new roles({ nombre: "admin" }).save(),
      new roles({ nombre: "user_Approver" }).save(),
      new roles({ nombre: "user_Reviewer" }).save(),
      new roles({ nombre: "user_Biller" }).save(),
      new roles({ nombre: "user_Employer" }).save(),
      new roles({ nombre: "user_Root" }).save(),
    ]);

    console.log(values);
  } catch (error) {}
};
