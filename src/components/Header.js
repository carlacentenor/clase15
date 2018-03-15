import React from 'react';
import PropTypes from 'prop-types'

const Header = ({title,url,paragraph}) =>  (
    <header>
        
    <h1>{title}</h1>
    <img src={url} alt={url}/>
    <p>{paragraph}</p>
    </header>
)

// Definir los proptypes por los parametros que ingresan
Header.propTypes = {
    title : PropTypes.string.isRequired,
    url : PropTypes.string.isRequired,
    paragraph : PropTypes.string.isRequired
};

Header.defaultProps={
title : 'HOla',
url :'prueba.jpg',
paragraph : 'Esto es una prueba'
}

export default Header