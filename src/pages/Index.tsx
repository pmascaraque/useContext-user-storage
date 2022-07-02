import React, { useContext } from "react";
import { UserContext } from "../UserContext";

export const Index: React.FC = () => {
  const msg = useContext(UserContext);

  return (
    <div>
      <h2>Index</h2>
      <div>{msg}</div>
    </div>
    );
}
