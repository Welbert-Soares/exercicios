import { Component } from "react";
import Contador from "../../components/Contador";

class ContadorPage extends Component {
    state = {};

    render() {
        return (
            <>
                <Contador valorInicial={100} passo={37} />
            </>
        );
    }
}

export default ContadorPage;
