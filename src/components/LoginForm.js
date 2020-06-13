import React, { useState } from 'react';


export default function LoginForm() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [cpf, setCpf] = useState(null);


const handleSubmit = async () =>{
    
}

    return (
        <div className="container">
            <div className="text-center">
                <h3>Faça seu Login!</h3>
                <p>
                    Entre em nosso sistema para ter acesso as informações de interesse!
                </p>
            </div>
        </div>
    )

}