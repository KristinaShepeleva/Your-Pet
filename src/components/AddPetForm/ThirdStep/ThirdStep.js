import React, { useState } from 'react';
import css from './ThirdStep.module.css';

import nextIcon from '../../../images/icons/pawprint.svg';
import backIcon from '../../../images/icons/arrow-left.svg';
import PetAdd from '../../../images/icons/plus-big.svg';

const ThirdStep = ({ handleNext, handlePreviousStep, formData }) => {
  const [photo, setPhoto] = useState('');
  const [comments, setComments] = useState('');

  const handleFileChange = e => {
    setPhoto(e.target.files[0]);
  };

  return (
    <div>
      <div className={css.WrapperPoto}>
        <label className={css.LabelAddText}>Load the pet’s image:</label>
        <div>
          <input
            type="file"
            id="photo"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </div>
        <label htmlFor="photo">
          <div className={css.LabelAdd}>
            {photo && (
              <img
                className={css.PreviewPhoto}
                src={URL.createObjectURL(photo)}
                alt="Upload img"
              />
            )}
            <img className={css.IconAdd} src={PetAdd} alt="add" />
          </div>
        </label>
      </div>
      <div className={css.WrapperTextareaOne}>
        <label className={css.TextareaText}>Comments</label>
        <textarea
          className={css.TextareaAddOne}
          id="comments"
          value={comments}
          placeholder="Type your comment"
          onChange={e => setComments(e.target.value)}
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
              <span>Done</span>
              <img src={nextIcon} alt="Done" />
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ThirdStep;
