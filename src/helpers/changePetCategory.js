export const changePetCategory = string => {
  if (!string.includes('-')) {
    return string;
  }
  return string
    .split('')
    .map(letter => {
      if (letter === '-') return ' ';
      return letter;
    })
    .join('');
};
