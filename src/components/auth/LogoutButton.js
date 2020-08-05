import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const onClick = () => {
    logout()
  }
  return <button onClick={onClick}>Log Out</button>;
};

export default LogoutButton;