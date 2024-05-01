import './Button.css';
import React from 'react';

const Button = ({ name,image, onClick }) => {
  return (
    <button className='button' onClick={onClick}>
        <img src={image} className='image'></img>
        {name}</button>
  );
};

export default Button;
