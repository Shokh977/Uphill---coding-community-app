import React from "react";
import Login from "./Login";

export default function ProtectedPage({ children }) {
  const { isAuthenticated, user } = useStoreAuth();
  return (
    <div>
      {isAuthenticated && user.isVerified && <Login />}
      {children}
    </div>
  );
}
