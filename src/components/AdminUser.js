import React, { useState, useEffect } from "react";
import api from "../services/api";

export default function AdminUser() {
  const [userData, setUserData] = useState(null);
  const getAllUsers = async () => {
    try {
      const response = await api.get("users/getAll");
      setUserData(() => [...response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div>
      {userData !== null ? (
        userData.map((user) => {
          return (
            <div>
              <h1>{user.name}</h1>
              <h1>{user.cpf}</h1>
              <h1>{user.email}</h1>
              <h1>{user.access}</h1>
              <img src={user.img_path} alt="profileImage" />
            </div>
          );
        })
      ) : (
        <h1>Nenhum dado encontrado</h1>
      )}
    </div>
  );
}
