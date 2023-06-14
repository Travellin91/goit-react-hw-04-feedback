import React from 'react';
import PropTypes from 'prop-types';
import './Message.css'; 

const Message = ({ message }) => {
  
    return (
        <p className='text'>{message}</p> );
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
