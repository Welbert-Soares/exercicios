function ContadorDisplay(props) {
    return ( 
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontSize: "2rem",
        }}>
            {props.valor}
        </div>
    );
}

export default ContadorDisplay;