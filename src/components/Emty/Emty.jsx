import PropTypes from 'prop-types';

export const Empty = ({ text }) => {
  return <p>{text}</p>;
};

Empty.propTypes = {
  text: PropTypes.string.isRequired,
};
