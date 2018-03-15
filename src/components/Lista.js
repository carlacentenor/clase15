import React from 'react'
import Item from './Item'

const Lista = ({arrayCursos}) =>(
    <ul>
        {
            arrayCursos.map(course => <Item key={course} course ={course}  /> )
        }
       
    </ul>
)

export default Lista