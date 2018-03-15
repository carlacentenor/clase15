import React from 'react';
import Lista from './Lista'
import PropTypes from 'prop-types'



const Section = ({contenido,arrayCursos, isActive}) => {
    // renderizado condicional
    const style = isActive ? 'curso1' : 'curso2'
return (
<section>
    <p className={style}>{contenido}</p>
    
    <Lista arrayCursos={arrayCursos} />
</section>
)
}

Section.propTypes = {
    contenido : PropTypes.string.isRequired,
    arrayCursos : PropTypes.arrayOf(PropTypes.string).isRequired
    
}

export default Section