import './componenteHook.css'
import React, { useState, useEffect } from 'react'

export default () => {
    const [count, setCount] = useState(0)

    //Similar a componentDidMount e componentDidUpdate:
    useEffect(() => {
        //atualiza p totiçp dp dpci,emtp itoçozamdp a API do navegador
        document.title = `You clicked ${count} times`
    })

    return(
        <div className='Card'>
            <p>You clicked times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}