
  export function formatName(value) {
    if (!value) return value;
  
    const onlyLetters = value.replace(
      /[^A-Za-záàâãéèêíïóôõöúçÁÀÂÃÉÈÍÏÓÔÕÖÚÇ ]/g,
      ''
    );
  
    if (onlyLetters.length > 30) {
      return onlyLetters.substring(0, 30);
    }
  
    return onlyLetters;
  }
  

  export function formatCpf(value) {
    if (!value) return value;
  
    const onlyNums = value.replace(/[^\d]/g, '');
  
    let newValue = onlyNums;
  
    if (onlyNums.length > 3)
      newValue = `${onlyNums.slice(0, 3)}.${onlyNums.slice(3, 6)}`;
  
    if (onlyNums.length > 6) newValue += `.${onlyNums.slice(6, 9)}`;
  
    if (onlyNums.length > 9) newValue += `-${onlyNums.slice(9)}`;
  
    if (newValue.length > 9) return newValue.slice(0, 14);
  
    return newValue;
  }
  
  export function formatPhone(value) {
    if (!value) return value;
  
    const onlyNums = value.replace(/[^\d]/g, '');
    let newValue = onlyNums;
  
    if (onlyNums.length > 2)
      newValue = `(${onlyNums.slice(0, 2)}) ${onlyNums.slice(2, 7)}`;
  
    if (onlyNums.length > 7) newValue += `-${onlyNums.slice(7)}`;
  
    if (newValue.length > 7) return newValue.slice(0, 15);
  
    return newValue;
  }