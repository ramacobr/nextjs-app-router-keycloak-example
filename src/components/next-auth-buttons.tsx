"use client";
import { signIn, signOut } from "next-auth/react";

export const SignIn = () => {
  return <button onClick={() => signIn("keycloak")}>signIn</button>;
};

export const SignOut = () => {
  return <button onClick={() => signOut()}>SignOut</button>;
};
