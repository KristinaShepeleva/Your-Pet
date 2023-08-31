import React from 'react';
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
