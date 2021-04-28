import './index.css'
import ReactDom from 'react-dom'

import Projeto from './components/Projeto'
import ComParametro from './components/ComParametro'

ReactDom.render(
    <>
        <Projeto/>
        <ComParametro titulo="Titulo da Noticia" subtitulo='Descrição do que aconteceu'/>
    </>,
    document.getElementById('root')
)