import ThirdStep from './ThirdStep';
import ThirdStepSell from './ThirdStepSell';
import ThirdStepFound from './ThirdStepFound';

const ThirdStepRender = ({
  handlePreviousStep,
  selectedOption,
  formData,
  doneSubmit3,
}) => {
  return (
    <>
      {selectedOption === 'your-pet' ? (
        <ThirdStep
          handlePreviousStep={handlePreviousStep}
          formData={formData}
          doneSubmit3={doneSubmit3}
        />
      ) : (
        ''
      )}
      {selectedOption === 'sell' ? (
        <ThirdStepSell
          handlePreviousStep={handlePreviousStep}
          formData={formData}
          doneSubmit3={doneSubmit3}
        />
      ) : (
        ''
      )}
      {selectedOption === 'lost-found' || selectedOption === 'in-good-hands' ? (
        <ThirdStepFound
          handlePreviousStep={handlePreviousStep}
          formData={formData}
          doneSubmit3={doneSubmit3}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default ThirdStepRender;
