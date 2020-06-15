import React from "react";

export default function LoginLogo() {
  return (
    <div>
      {" "}
      <div className="text-center">
        <img
          src="/images/Logo-Montain-bear.png"
          className="montain-bear-logo"
          style={{ width: 150 }}
        />
        <h3 className="logo-big">Faça Seu Login!</h3>
        <p className="logo-small">
          Entre em nosso sistema para ter acesso as informações de interesse!
        </p>
      </div>
    </div>
  );
}
