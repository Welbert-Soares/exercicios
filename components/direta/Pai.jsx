import Filho from "./Filho";

export default function Pai(props) {
    return (
        <div>
            <Filho nome="Pedro" familia={props.familia}></Filho>
            <Filho {...props} nome="Gabriel"></Filho>
        </div>
    )
}