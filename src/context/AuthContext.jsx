"use client";
import Loading from "@/app/loading";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const updateUser = (data) => {
    setCurrentUser(data);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const userData = localStorage.getItem("user");
        if (userData) {
          setCurrentUser(JSON.parse(userData));
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("user");
      } finally {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (currentUser !== null) {
        localStorage.setItem("user", JSON.stringify(currentUser));
      } else {
        localStorage.removeItem("user"); // Hapus kalau null
      }
    }
  }, [currentUser]);

  if (loading) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider value={{ currentUser, updateUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
