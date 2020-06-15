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

  const changeAccesses = async (id, access) => {
    console.log(access);
    let data = {};
    data["access"] = access;
    try {
      const response = await api.post("users/changeAccesses/" + id, data);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  // Turning Admin/Standard -> Disable (Desativar)
  const disableUser = async (newid) => {
    changeAccesses(newid, 0);
  };
  //  Turning Admin -> Standard
  const standardUser = async (newid) => {
    changeAccesses(newid, 1);
  };
  // Turning Standard -> Admin
  const adminUser = async (newid) => {
    console.log(newid);

    changeAccesses(newid, 999);
  };
  // Delete user
  const deleteUser = async (newid) => {
    try {
      console.log(localStorage.getItem("id"));
      const response = await api.get("users/deleteUser/");
      console.log(response);
      setUserData(() => response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {userData !== null ? (
        userData.map((user) => {
          return (
            <div>
              <div className="container">
                <div className="card mt-2">
                  <div className="row">
                    <div className="col-sm-4">
                      <img
                        className="image-user mr-5 ml-5 img-thumbnail"
                        src={user.img_path}
                        width="150"
                        alt="profileImage"
                      ></img>
                    </div>
                    <div className="col-sm-4">
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
                        {user.access === 999 && "Admin"}
                        {user.access === 1 && "Comum"}
                        {user.access === 0 && "DESATIVADO"}
                      </p>
                    </div>
                    <div className="col-sm-4">
                      {/* Admin User */}
                      {user.access === 999 && (
                        <div>
                          {" "}
                          <button
                            className="btn-admin-custom"
                            type="button"
                            onClick={() => disableUser(user.id)}
                          >
                            Desativar
                          </button>
                          <button
                            className="btn-admin-custom"
                            type="button"
                            onClick={() => standardUser(user.id)}
                          >
                            Tornar Comum
                          </button>
                          <button
                            className="btn-admin-custom"
                            type="button"
                            onClick={() => deleteUser(user.id)}
                          >
                            Deletar
                          </button>
                        </div>
                      )}
                      {/* Standard User */}
                      {user.access === 1 && (
                        <div>
                          <button
                            className="btn-admin-custom"
                            type="button"
                            onClick={() => disableUser(user.id)}
                          >
                            Desativar
                          </button>
                          <button
                            className="btn-admin-custom"
                            type="button"
                            onClick={() => adminUser(user.id)}
                          >
                            Tornar admin
                          </button>
                          <button
                            className="btn-admin-custom"
                            type="button"
                            onClick={() => deleteUser(user.id)}
                          >
                            Deletar
                          </button>
                        </div>
                      )}
                      {/* Disabled User */}
                      {user.access === 0 && (
                        <div>
                          <button
                            className="btn-admin-custom"
                            type="button"
                            onClick={() => standardUser(user.id)}
                          >
                            Ativar
                          </button>
                          <button
                            className="btn-admin-custom"
                            type="button"
                            onClick={() => deleteUser(user.id)}
                          >
                            Deletar
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
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
