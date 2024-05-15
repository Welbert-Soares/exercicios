import { Component } from "react";

class Contador extends Component {
    state = {
        numero: this.props.valorInicial ?? 0,
        passo: this.props.passo ?? 1,
    };

    incremento = () => {
        this.setState({
            numero: this.state.numero + this.state.passo ?? 1,
        });
    };
    decremento = () => {
        this.setState({
            numero: this.state.numero - this.state.passo ?? 1,
        });
    };

    render() {
        return (
            <div>
                <h1>Contador (usando Classe)</h1>
                <h2>{this.state.numero}</h2>
                <input
                    type="number"
                    min={1}
                    max={1000}
                    value={this.state.passo}
                    onChange={event => this.setState({passo: +event.target.value})}
                />
                <button onClick={this.incremento}>+</button>
                <button onClick={this.decremento}>-</button>
            </div>
        );
    }
}

export default Contador;
