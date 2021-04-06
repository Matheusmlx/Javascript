import {Component} from 'react'

export default class FormularioCadastro extends Component{
    render() {
        return(
            <form>
                <input type="text" placeholder="Título" />
                <textarea placeholder="Escreva sua Nota..."></textarea>
                <button>Criar Nota</button>
            </form>
        )
    }
}