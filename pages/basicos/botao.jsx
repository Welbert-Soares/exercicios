function acao1() {
    console.log("acao1");
}

function botao() {
    function acao2() {
        console.log("acao2");
    }

    function acao5(event) {
        console.log(event);
    }
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                gap: "10px",
            }}
        >
            <button
                style={{ width: "200px", height: "50px", cursor: "pointer" }}
                onClick={acao1}
            >
                Click
            </button>
            <button
                style={{ width: "200px", height: "50px", cursor: "pointer" }}
                onClick={acao2}
            >
                Click2
            </button>
            <button
                style={{ width: "200px", height: "50px", cursor: "pointer" }}
                onClick={() => console.log("acao3")}
            >
                Click3
            </button>
            <button
                style={{ width: "200px", height: "50px", cursor: "pointer" }}
                onClick={acao5}
            >
                Click5
            </button>
            <button
                style={{ width: "200px", height: "50px", cursor: "pointer" }}
                onClick={(e) => acao5(e.altKey)}
            >
                Click6
            </button>

            <input
                style={{ width: "200px", height: "50px", padding: "10px", textAlign: "center"}}
                type="text"
                placeholder="Digite algo"
                onChange={(e) => console.log(e.target.value)}
            />
        </div>
    );
}

export default botao;
