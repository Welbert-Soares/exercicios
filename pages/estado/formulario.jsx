import { useState } from "react";

function formulario() {
    const [valor, setValor] = useState("");

    function alterarInput() {
        setValor(valor + "!");
    }
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
        }}>
            <span>{valor}</span>
            <input type="text" value={valor} 
                onChange={e => setValor(e.target.value)}/>
            <button onClick={alterarInput}>Alterar</button>
        </div>
    );
}

export default formulario;
