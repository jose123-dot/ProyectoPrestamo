import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest } from "../httpService/auth";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("UseAuth must be used within an authprovider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

  //registrar nuevo usuario
  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setUser(res.data);
      setisAuthenticated(true);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  //loguearse

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log(res);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data]);
    }
  };

  //duracion del  error
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);
  return (
    <authContext.Provider
      value={{ user, signup, signin, isAuthenticated, errors }}
    >
      {children}
    </authContext.Provider>
  );
};
