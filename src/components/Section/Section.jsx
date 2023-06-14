import React from 'react';
import PropTypes from 'prop-types';
import './Section.css';

const Section = ({title, children }) => {
return (
    <div className='container'>
        <h2 className='title'>{title}</h2>
        {children}
    </div>
)
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default Section;