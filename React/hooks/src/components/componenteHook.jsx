import './componenteHook.css'
import {useState} from 'react'

export default () => {
    const [idade,setIdade] = useState(0)
    const [fruit,setFruit] = useState('banana')

    return(
        <div className="Card">
            <p>Primeiro State {idade} </p>
            <p>Segundo State  {fruit}</p>
            <button onClick={() => setIdade(idade + 1)}>Click me</button>
        </div>
    )
}