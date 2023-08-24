import React from 'react';

import css from './AddPetPage.module.css';

const StepItem = ({ isActive, isDone, children }) => {
  let className = css.StepItem;

  if (isActive) {
    className = css.StepItemCurrent;
  } else if (isDone) {
    className = css.StepItemDone;
  }

  return <li className={className}>{children}</li>;
};

const CurrentStep = ({ currentStep }) => {
  return (
    <ul className={css.StepList}>
      <StepItem isActive={currentStep === 1} isDone={currentStep > 1}>
        Choose option
      </StepItem>
      <StepItem isActive={currentStep === 2} isDone={currentStep > 2}>
        Personal details
      </StepItem>
      <StepItem isActive={currentStep === 3} isDone={currentStep > 3}>
        More info
      </StepItem>
    </ul>
  );
};

export default CurrentStep;
