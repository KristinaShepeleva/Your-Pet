export const formattedDates = date => {
  if (date === null) {
    return '';
  }
  return new Date(date).toISOString().split('T')[0];
};
