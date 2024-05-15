import { useState } from "react";

function mouse() {
    //React Hooks
    const [x, setX] = useState(0); // usando array destructuring
   
    const arrayY = useState(0); // modo menos comum
    let y = arrayY[0];
    const alterarY = arrayY[1];

    const estilo = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh",
    };
    function quandoMover(event) {
        setX(event.clientX);
        alterarY(event.clientY);
    }
    return (
        <div style={estilo} onMouseMove={quandoMover}>
            <span>Eixo X: {x}</span>
            <span>Eixo y: {y}</span>
        </div>
    );
}

export default mouse;
