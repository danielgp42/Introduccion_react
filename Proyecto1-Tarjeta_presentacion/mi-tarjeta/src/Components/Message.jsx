import React from 'react';
import '../Styles/Message.css';

const Message = ({ message }) => {
  return <p className="message">{message}</p>;
};

export default Message;