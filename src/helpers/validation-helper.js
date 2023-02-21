
function validDigit(strCPF, n) {
    let sum = 0;
    for (let i = 0; i < n - 1; i++) sum += parseInt(strCPF[i]) * (n - i);
  
    let rest = 11 - (sum % 11);
    if (rest >= 10) rest = 0;
  
    return rest === parseInt(strCPF[n - 1]);
  }
  
  function isValidCpf(cpf) {
    // eslint-disable-next-line eqeqeq
    if (cpf.length != 11) return false;
  
    let same_digits = true;
    for (let i = 0; i < cpf.length - 1; i++) {
      // eslint-disable-next-line eqeqeq
      if (cpf.charAt(i) != cpf.charAt(i + 1)) {
        same_digits = false;
        break;
      }
    }
  
    return !same_digits && validDigit(cpf, 10) && validDigit(cpf, 11);
  }
  
  export const validateCPFNumber = cpf => {
    const cpfOnlyNumbers = cpf.replace(/[^\d]+/g, '');
    return /^[0-9]{11}$/.test(cpfOnlyNumbers) && isValidCpf(cpfOnlyNumbers);
  };
  
  
  export const validatePhoneNumber = phone => {
    const phoneOnlyNumbers = phone.replace(/[^\d]+/g, '');
    let allSameDigit;
    if (phoneOnlyNumbers.length === 11) {
      const phoneWithoutDDD = phoneOnlyNumbers.slice(2, 11);
      allSameDigit = /^([0-9])\1*$/.test(phoneWithoutDDD);
    }
    return /^[0-9]{2}9[0-9]{8}$/.test(phoneOnlyNumbers) && !allSameDigit;
  };
  
  export const validateEmail = value => {
    return /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i.test(value);
  };
  
  export const validateUserName = value => {
    return /^[a-z0-9_-]{3,16}$/.test(value);
  };
  
  