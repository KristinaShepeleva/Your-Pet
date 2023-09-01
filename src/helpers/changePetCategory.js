export const changePetCategory = string => {
  if (!string.includes('-')) {
    return string;
  }

  return string
    .split('')
    .map(letter => {
      if (letter === '-' && string === 'lost-found') return '/';
      if (letter === '-') return ' ';

      return letter;
    })
    .join('');
};
