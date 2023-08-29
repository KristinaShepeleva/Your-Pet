export const formattedDates = date => {
  try {
    if (date === null) {
      return '';
    }
    return new Date(date).toISOString().split('T')[0];
  } catch (e) {
    console.log(e);
  }
};
