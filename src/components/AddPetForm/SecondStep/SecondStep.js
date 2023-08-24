import React, { useState } from 'react';
import css from './SecondStep.module.css';

import nextIcon from '../../../images/icons/pawprint.svg';
import backIcon from '../../../images/icons/arrow-left.svg';

const SecondStep = ({ handleNext, handlePreviousStep, formData }) => {
  const [name, setName] = useState(formData.name || '');
  const [birthday, setBirthday] = useState(formData.birthday || '');
  const [breed, setBreed] = useState(formData.breed || '');

  return (
    <div className={css.FormWrapper}>
      <div className={css.WrapperLabelInput}>
        <label className={css.LabelStep} htmlFor="name">
          Pet’s name
        </label>
        <input
          className={css.Input}
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Type name pet"
        />
      </div>
      <div className={css.WrapperLabelInput}>
        <label className={css.LabelStep} htmlFor="birthday">
          Date of birth
        </label>
        <input
          className={css.Input}
          type="date"
          id="birthday"
          value={birthday}
          onChange={e => setBirthday(e.target.value)}
        />
      </div>
      <div className={css.WrapperLabelInput}>
        <label className={css.LabelStep} htmlFor="type">
          Type
        </label>
        <input
          className={css.Input}
          type="text"
          id="type"
          value={breed}
          onChange={e => setBreed(e.target.value)}
          required
          placeholder="Type of pet"
        />
      </div>
      <ul className={css.LinkAddPet}>
        <li>
          <button
            className={css.LinkAddPetCancel}
            onClick={() => handlePreviousStep(formData)}
          >
            <div className={css.ButtonEl}>
              <img src={backIcon} alt="Back" />
              <span>Back</span>
            </div>
          </button>
        </li>
        <li>
          <button className={css.ButtonNext} onClick={handleNext}>
            <div className={css.ButtonEl}>
              <span>Next</span>
              <img src={nextIcon} alt="Next" />
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SecondStep;
