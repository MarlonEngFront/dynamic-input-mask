import React, { useState } from 'react';
import './style.css';
import {
  validateCPFNumber,
  validatePhoneNumber,
  validateEmail,
  validateUserName,
} from '../helpers/validation-helper';
import { formatCpf, formatPhone } from '../helpers/mask';

const DynamicInputGeneric = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [maskType, setMaskType] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    let newMaskType = maskType;

    if (inputValue.length > value.length) {
      if (validateCPFNumber(inputValue)) {
        newMaskType = 'cpf';
      } else if (validatePhoneNumber(inputValue)) {
        newMaskType = 'phone';
      } else if (validateEmail(inputValue)) {
        newMaskType = 'email';
      } else if (validateUserName(inputValue)) {
        newMaskType = 'username';
      }
    }

    setMaskType(newMaskType);

    switch (newMaskType) {
      case 'cpf':
        setValue(formatCpf(inputValue));
        break;
      case 'phone':
        setValue(formatPhone(inputValue));
        break;
      case 'email':
      case 'name':
      default:
        setValue(inputValue);
        break;
    }

  };

  // const handleBlur = (event) => {
  //   if (maskType === 'cpf' && !validateCPFNumber(value)) {
  //     setError('CPF inválido');
  //     return;
  //   }

  //   if (maskType === 'phone' && !validatePhoneNumber(value)) {
  //     setError('Telefone inválido');
  //     return;
  //   }

  //   if (maskType === 'email' && !validateEmail(value)) {
  //     setError('Email inválido');
  //     return;
  //   }

  //   if (maskType === 'name' && !validateUserName(value)) {
  //     setError('UserName inválido');
  //     return;
  //   }

  //   setError('');
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (maskType === 'cpf' && !validateCPFNumber(value)) {
      setError('CPF inválido');
      return;
    }

    if (maskType === 'phone' && !validatePhoneNumber(value)) {
      setError('Telefone inválido');
      return;
    }

    if (maskType === 'email' && !validateEmail(value)) {
      setError('Email inválido');
      return;
    }

    if (maskType === 'name' && !validateUserName(value)) {
      setError('UserName inválido');
      return;
    }

    console.log('Form submitted with value:', value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className='input' placeholder='CPF, celular, email ou username' value={value} onChange={handleInputChange}   />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h3>tipo de dado fornecido</h3>
      <p>{maskType}</p>
       <br />
       <br />
      <button type='submit'>CONTINUAR</button>
    </form>
  );
};

export default DynamicInputGeneric;
