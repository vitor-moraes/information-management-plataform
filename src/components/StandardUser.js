import React, { useState, useEffect } from "react";
import api from "../services/api";

export default function StandardUser() {
  const [userData, setUserData] = useState(null);
  const getUser = async () => {
    try {
      const response = await api.get("users/get/:id");
      setUserData(() => [...response.data]);
      console.log(userData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      {userData !== null ? (
        userData.map((user) => {
          return (
            <div>
              <div className="container">
                <div className="card mt-2">
                  <img
                    className="image-user"
                    src={user.img_path}
                    width="150"
                    alt="profileImage"
                  ></img>
                  <p className="user-info">
                    <strong>Nome: </strong>
                    {user.name}
                  </p>
                  <p className="user-info">
                    <strong>CPF: </strong>
                    {user.cpf}
                  </p>
                  <p className="user-info">
                    <strong>E-mail: </strong>
                    {user.email}
                  </p>
                  <p className="user-info">
                    <strong>Acesso: </strong>
                    {user.access}
                  </p>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h1>Nenhum dado encontrado</h1>
      )}
    </div>
  );
}
