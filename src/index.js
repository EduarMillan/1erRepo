import React from 'react'
import ReactDom from 'react-dom/client'
const root = ReactDom.createRoot(document.getElementById('root'))


function Iniciando() {
    return <div>
        <h1> Iniciando GitHub</h1>
        <img src="https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_750/https://basicoleads.com/wp-content/uploads/hola-mundo-portada.png" alt="este soy yo"></img>
    </div>
}

root.render(
<div>
    <Iniciando />
</div>
)


