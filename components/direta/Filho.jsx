export default function Filho(props) {
    return (
        <div style={{
            border: "1px solid #000",
            padding: "10px",
        }}>
            <h3>{props.nome}</h3>
            <h2>{props.familia}</h2>
        </div>
    )
}