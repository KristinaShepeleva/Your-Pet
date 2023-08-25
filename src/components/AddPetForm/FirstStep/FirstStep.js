import React from 'react';
import css from '../AddPetPage.module.css';

import nextIcon from '../../../images/icons/pawprint.svg';
import cancelIcon from '../../../images/icons/arrow-left.svg';

const PetButton = ({ isActive, label, onClick }) => {
  const buttonClassName = isActive ? css.PetButtonActive : '';

  return (
    <li>
      <button
        className={`${css.PetButton} ${buttonClassName}`}
        onClick={onClick}
      >
        {label}
      </button>
    </li>
  );
};

const ControlButton = ({ label, icon, onClick, isPrimary, isNext }) => {
  const buttonClass = isPrimary ? css.ButtonNext : css.LinkAddPetCancel;

  return (
    <li>
      <button className={buttonClass} onClick={onClick}>
        <div className={css.ButtonEl}>
          {isNext && <span>{label}</span>}
          <img src={icon} alt={label} />
          {!isNext && <span>{label}</span>}
        </div>
      </button>
    </li>
  );
};

const FirstStep = ({
  handleNext,
  handleCancel,
  handleOptionChange,
  activeButton,
}) => {
  const handleSelectCategory = () => {
    handleNext({});
  };

  return (
    <div>
      <ul className={css.ChooseOptionList}>
        <PetButton
          isActive={activeButton === 1}
          label="your pet"
          onClick={() => handleOptionChange('your-pet', 1)}
        />
        <PetButton
          isActive={activeButton === 2}
          label="sell"
          onClick={() => handleOptionChange('sell', 2)}
        />
        <PetButton
          isActive={activeButton === 3}
          label="lost/found"
          onClick={() => handleOptionChange('lost-found', 3)}
        />
        <PetButton
          isActive={activeButton === 4}
          label="in good hands"
          onClick={() => handleOptionChange('in-good-hands', 4)}
        />
      </ul>
      <ul className={css.LinkAddPet}>
        <ControlButton
          label="Cancel"
          icon={cancelIcon}
          onClick={handleCancel}
        />
        <ControlButton
          label="Next"
          icon={nextIcon}
          onClick={handleSelectCategory}
          isPrimary
          isNext
        />
      </ul>
    </div>
  );
};

export default FirstStep;
