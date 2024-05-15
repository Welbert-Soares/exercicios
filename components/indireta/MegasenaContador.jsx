function MegasenaContador(props) {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#000",
                borderRadius: "25px",
                width: "50px",
                height: "50px",
                color: "#fff",
                fontSize: "2rem",
                fontWeight: "bold",
            }}
        >
            {props.numero}
        </div>
    );
}

export default MegasenaContador;
