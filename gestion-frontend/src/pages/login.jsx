"use client";

import { Button, Label, TextInput } from "flowbite-react";

import React from "react";

const Login = () => {
  return (
    <form className="flex max-w-md flex-col gap-4">
      <h1>Login</h1>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Your email" />
        </div>
        <TextInput
          id="email2"
          type="email"
          placeholder="email"
          required
          shadow
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Your password" />
        </div>
        <TextInput id="password2" type="password" required shadow />
      </div>

      <Button type="submit">Iniciar Sesion</Button>
    </form>
  );
};

export default Login;
