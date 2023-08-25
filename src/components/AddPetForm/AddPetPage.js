import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CurrentStep from './CurrentStep';
import FirstStep from './FirstStep/FirstStep';
import SecondStepRender from './SecondStep/SecondStepRender';
import ThirdStepRender from './ThirdStep/ThirdStepRender';

import css from './AddPetPage.module.css';

function AddPetPage() {
  const [state, setState] = useState({
    step: 1,
    currentStep: 1,
    selectedOption: '',
    activeButton: null,
    isLoading: false,
    showModal: false,
    formData: {},
  });

  const navigate = useNavigate();

  const updateState = changes => {
    setState(prevState => ({
      ...prevState,
      ...changes,
    }));
  };

  const handleOptionChange = (option, number) => {
    updateState({
      formData: { ...state.formData, category: option },
      selectedOption: option,
      activeButton: number,
    });
  };

  const handleStepChange = (stepChange, stepData) => {
    updateState({ isLoading: true });
    if (
      state.selectedOption &&
      state.currentStep + stepChange > 0 &&
      state.currentStep + stepChange <= 3
    ) {
      updateState({
        step: state.step + stepChange,
        currentStep: state.currentStep + stepChange,
      });
    } else {
      window.alert('Please select an option!');
    }
    updateState({ isLoading: false });
    updateState({ formData: { ...state.formData, ...stepData } });
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const getStepTitle = () => {
    if (state.step === 1) {
      return 'Add pet';
    } else {
      return state.selectedOption
        ? `Add pet ${state.selectedOption}`
        : 'Text';
    }
  };

  return (
    <>
      <div
        className={`${
          state.step === 3 &&
          ['sell', 'lost-found', 'in-good-hands'].includes(state.selectedOption)
            ? css.AddPetThirdWrap
            : css.AddPetWrap
        }`}
      >
        <div
          className={`${
            state.step === 3 &&
            ['sell', 'lost-found', 'in-good-hands'].includes(
              state.selectedOption
            )
              ? css.StepInfo
              : ''
          }`}
        >
          <h2 className={css.AddPet}>{getStepTitle()}</h2>
          <CurrentStep
            currentStep={state.currentStep}
            selectedOption={state.selectedOption}
          />
        </div>
        {state.step === 1 && (
          <FirstStep
            handleNext={() => handleStepChange(1)}
            handleCancel={handleCancel}
            handleOptionChange={handleOptionChange}
            activeButton={state.activeButton}
          />
        )}
        {state.step === 2 && (
          <SecondStepRender
            selectedOption={state.selectedOption}
            handleNext={() => handleStepChange(1, state.formData)}
            handlePreviousStep={() => handleStepChange(-1, state.formData)}
            formData={state.formData}
          />
        )}
        {state.step === 3 && (
          <ThirdStepRender
            selectedOption={state.selectedOption}
            handleNext={() => handleStepChange(1, state.formData)}
            handlePreviousStep={() => handleStepChange(-1, state.formData)}
            formData={state.formData}
          />
        )}
      </div>
      {state.showModal && (
        // <Modal />
        <div>Modal content</div>
      )}
    </>
  );
}

export default AddPetPage;
