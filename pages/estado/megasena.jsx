import { useEffect, useState } from "react";
import { mega } from "@/functions/mega";
import MegasenaContador from "@/components/indireta/MegasenaContador";
function megasena() {
    const [numeros, setNumeros] = useState([]);
    const [qtd, setQtd] = useState(6);

    useEffect(() => {
        setNumeros(mega(qtd));
    }, []);

    const renderizarNumeros = () => {
        return numeros.map((numero) => (
            <MegasenaContador key={numero} numero={numero} />
        ));
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
            }}
        >
            <h1>Mega Sena</h1>
            <div
                style={{
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                {renderizarNumeros()}
            </div>
            <div>
                <input
                    type="number"
                    min={6}
                    max={20}
                    value={qtd}
                    onChange={(event) => setQtd(event.target.value)}
                />
                <button onClick={() => setNumeros(mega(qtd))}>Sortear</button>
            </div>
        </div>
    );
}

export default megasena;
