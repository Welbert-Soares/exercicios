import ContadorDisplay from "@/components/indireta/ContadorDisplay";
import { useState } from "react";

function contador() {
    const [valor, setValor] = useState(0);

    const container = {
        display: "flex",
        flexDirection: "column",
        fontSize: "1.5rem",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh",
        gap: "10px",
    };

    const botao = {
        width: "50px",
        height: "50px",
        padding: "10px",
        backgroundColor: "#444",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    };

    const aumentarValor = () => setValor(valor + 1);

    const diminuirValor = () => setValor(valor - 1);

    return (
        <div style={container}>
            <h1>Contador</h1>
            <ContadorDisplay valor={valor}/>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                <button onClick={aumentarValor} style={botao}>
                    +
                </button>
                <button onClick={diminuirValor} style={botao}>
                    -
                </button>
            </div>
        </div>
    );
}

export default contador;
