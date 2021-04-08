import {useState} from 'react'

export default () => {
    const [idade,setIdade] = useState(0)
    const [fruit,setFruit] = useState('banana')

    return(
        <div>
            <ul>
                <li>Primeiro State {idade} </li>
                <li>Segundo State  {fruit}</li>
            </ul>
            <button onClick={() => setIdade(idade + 1)}>Click me</button>
        </div>
    )
}