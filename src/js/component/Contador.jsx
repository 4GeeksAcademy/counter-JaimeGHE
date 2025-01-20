import React, { useState, useEffect } from "react";

export const Contador = () => {
    const [contador, establecerContador] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            establecerContador(valorAnterior => valorAnterior + 1);
        }, 1000);

        return () => clearInterval(intervalo);
    }, []);

    const contadorFormateado = contador.toString().padStart(6, "0").split("");

    return (
        <div 
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "black",
                padding: "20px",
                borderRadius: "10px",
                marginTop: "50px"
            }}
        >
            <h1 style={{color: "white"}}>Contador:</h1>
            <div 
                style={{
                    fontSize: "40px",
                    color: "white",
                    marginRight: "10px"
                }}
            >
                🕒
            </div>
            {contadorFormateado.map((digito, indice) => (
                <div 
                    key={indice} 
                    style={{
                        width: "50px",
                        height: "70px",
                        margin: "5px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#333",
                        color: "white",
                        fontSize: "40px",
                        fontWeight: "bold",
                        borderRadius: "5px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
                    }}
                >
                    {digito}
                </div>
            ))}
        </div>
    );
};
