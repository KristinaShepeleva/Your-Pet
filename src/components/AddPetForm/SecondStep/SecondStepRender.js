import PropTypes from 'prop-types';

import SecondStep from './SecondStep';
import SecondStepSell from './SecondStepSell';

const SecondStepRender = ({
  handleNext,
  handlePreviousStep,
  selectedOption,
  formData,
  doneSubmit2,
}) => {
  return (
    <>
      {selectedOption === 'your-pet' ? (
        <SecondStep
          handleNext={handleNext}
          handlePreviousStep={handlePreviousStep}
          formData={formData}
          doneSubmit2={doneSubmit2}
        />
      ) : (
        ''
      )}
      {selectedOption === 'sell' ||
      selectedOption === 'lost-found' ||
      selectedOption === 'in-good-hands' ? (
        <SecondStepSell
          handleNext={handleNext}
          handlePreviousStep={handlePreviousStep}
          formData={formData}
          doneSubmit2={doneSubmit2}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default SecondStepRender;

SecondStepRender.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handlePreviousStep: PropTypes.func.isRequired,
  formData: PropTypes.shape(),
  doneSubmit2: PropTypes.func.isRequired,
  selectedOption: PropTypes.string.isRequired,
};
