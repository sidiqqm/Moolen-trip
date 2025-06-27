"use client";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true); // Tambahan state untuk loading

  const updateUser = (data) => {
    setCurrentUser(data);
  };

  useEffect(() => {
    // Hanya berjalan di client-side
    if (typeof window !== "undefined") {
      try {
        const userData = localStorage.getItem("user");
        if (userData) {
          setCurrentUser(JSON.parse(userData));
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("user"); // Bersihkan data corrupt
      } finally {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && currentUser !== null) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  if (loading) {
    return <div>Loading...</div>; // Atau tampilan loading lainnya
  }

  return (
    <AuthContext.Provider value={{ currentUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
