import React from 'react';
import ThirdStep from './ThirdStep';
import ThirdStepSell from './ThirdStepSell';
import ThirdStepFound from './ThirdStepFound';

const ThirdStepRender = ({
  handleNext,
  handlePreviousStep,
  selectedOption,
  formData,
}) => {
  return (
    <>
      {selectedOption === 'your-pet' ? (
        <ThirdStep
          handleNext={handleNext}
          handlePreviousStep={handlePreviousStep}
          formData={formData}
        />
      ) : (
        ''
      )}
      {selectedOption === 'sell' ? (
        <ThirdStepSell
          handleNext={handleNext}
          handlePreviousStep={handlePreviousStep}
          formData={formData}
        />
      ) : (
        ''
      )}
      {selectedOption === 'lost-found' || selectedOption === 'in-good-hands' ? (
        <ThirdStepFound
          handleNext={handleNext}
          handlePreviousStep={handlePreviousStep}
          formData={formData}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default ThirdStepRender;
