function Filho(props) {
    return (
        console.log(props.funcao),
        (
            <div>
                <h1>Filho</h1>
                <button onClick={props.funcao}>Falar com o pai v1</button>
                <br />
                <button onClick={() => props.funcao("Passei no ENEN!", "Respeita minha história", 10)}>
                    Falar com o pai v2
                </button>
            </div>
        )
    );
}

export default Filho;
