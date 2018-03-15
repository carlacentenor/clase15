import React from 'react'
import Header from './Header'
import Section from './Section'
import '../App.css'

const data = {
    title : 'Esto es mi spa de react',
    url : 'logo.png',
    paragraph : 'Libreria de js que me permite trabajar con vistas de m i spa',
    contenido : 'Si quiero llegar a arealizar mi single page aplications potentes debo conocer',
    cursos :['React','React-router','js'],
    active:false,
}


const App = () =>(

<div> 
<Header title={data.title} url={data.url} paragraph={data.paragraph} />
<Section contenido={data.contenido} arrayCursos={data.cursos} isActive={data.active} />
</div>
)

export default App