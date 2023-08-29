
import React, { useState } from 'react';
import css from './ThirdStep.module.css';

import nextIcon from '../../../images/icons/pawprint.svg';
import backIcon from '../../../images/icons/arrow-left.svg';
import PetAdd from '../../../images/icons/plus-big.svg';

const ThirdStep = ({ handleNext, handlePreviousStep, formData }) => {
  const [photo, setPhoto] = useState(null);
  const [comments, setComments] = useState('');
  const [photoError, setPhotoError] = useState('');

  const handleFileChange = e => {
    const selectedPhoto = e.target.files[0];
    if (selectedPhoto && selectedPhoto.size > 3 * 1024 * 1024) {
      setPhotoError('Photo size should be up to 3MB');
    } else {
      setPhotoError('');
      setPhoto(selectedPhoto);
    }
  };

  const handleValidation = () => {
    if (!photo) {
      setPhotoError('Photo is required');
      return false;
    }
    setPhotoError('');
    return true;
  };

  const handleDoneWithValidation = () => {
    if (handleValidation()) {
      handleNext();
    }
  };

  return (
    <div>
      <div className={css.WrapperPoto}>
        <label className={css.LabelAddText}>Load the pet’s image:</label>
        <div className={css.ErrorContainer}>
          <label
            htmlFor="photo"
            className={`${css.LabelAdd} ${photoError && css.InputError}`}
          >
            {photo && (
              <img
                className={css.PreviewPhoto}
                src={URL.createObjectURL(photo)}
                alt="Upload img"
              />
            )}
            <img className={css.IconAdd} src={PetAdd} alt="add" />
          </label>
          {photoError && (
            <span className={`${css.ErrorMessage} ${css.ErrorMessageRight}`}>
              {photoError}
            </span>
          )}
        </div>
        <input
          type="file"
          id="photo"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </div>
      <div className={css.WrapperTextareaOne}>
        <label className={css.TextareaText}>Comments</label>
        <textarea
          className={css.TextareaAddOne}
          id="comments"
          value={comments}
          placeholder="Type your comment"
          onChange={e => setComments(e.target.value)}
          maxLength={120}
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
          <button className={css.ButtonNext} onClick={handleDoneWithValidation}>
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
