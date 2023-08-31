import React, { useState } from 'react';
import css from './ThirdStep.module.css';

import female from '../../../images/icons/female.svg';
import male from '../../../images/icons/male.svg';
import { ArrowLeftIcon, PawprintIcon, PlusBigIcon } from 'helpers/icons';

const ThirdStepFound = ({ handlePreviousStep, formData, doneSubmit3 }) => {
  const [photo, setPhoto] = useState(formData.url || '');
  const [comments, setComments] = useState(formData.comments || '');
  const [place, setPlace] = useState(formData.place || '');

  const [sex, setSex] = useState(formData.sex || '');
  const [photoError, setPhotoError] = useState('');
  const [sexError, setSexError] = useState('');
  const [locationError, setLocationError] = useState('');

  const handleSexChange = (selectedSex, value) => {
    setSex(selectedSex);
  };

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
    let isValid = true;

    if (!photo) {
      setPhotoError('Photo is required');
      isValid = false;
    } else {
      setPhotoError('');
    }

    if (!sex) {
      setSexError('The sex is not selected');
      isValid = false;
    } else {
      setSexError('');
    }

    if (!place) {
      setLocationError('Location is required');
      isValid = false;
    } else {
      const locationRegex = /^[A-Z][a-z]+$/;
      if (!locationRegex.test(place)) {
        setLocationError('Invalid location format');
        isValid = false;
      } else {
        setLocationError('');
      }
    }

    return isValid;
  };

  const handleDoneWithValidation = () => {
    if (handleValidation()) {
      const noticeStep3 = { photo, comments, place, sex };
      doneSubmit3(noticeStep3);
    }
  };

  return (
    <>
      <div className={css.WrapperForm}>
        <div className={css.WrapperPotoSell}>
          <div className={css.SexText}>The Sex</div>
          <ul className={css.SexOption}>
            <li>
              <button
                className={`${css.SexElement} ${
                  sex === 'female' ? css.SelectedSex : ''
                }`}
                onClick={() => handleSexChange('female', 1)}
              >
                <img src={female} alt="female" />
                Female
              </button>
            </li>
            <li>
              <button
                className={`${css.SexElement} ${
                  sex === 'male' ? css.SelectedSex : ''
                }`}
                onClick={() => handleSexChange('male', 2)}
              >
                <img src={male} alt="male" />
                Male
              </button>
            </li>
          </ul>
          {sexError && <span className={css.ErrorMessage}>{sexError}</span>}
          <div className={css.WrapperAddPhoto}>
            <label className={css.LabelAddText}>Load the pet’s image:</label>
            <input
              type="file"
              id="photo"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            <label
              htmlFor="photo"
              className={`${css.LabelAdd} ${photoError && css.InputError}`}
            >
              <div className={css.LabelAdd}>
                {photo && (
                  <img
                    className={css.PreviewPhoto}
                    src={URL.createObjectURL(photo)}
                    alt="Selected img"
                  />
                )}
                {!photo && <PlusBigIcon className={css.IconAdd} />}
              </div>
            </label>
            {photoError && (
              <span className={`${css.ErrorMessage} ${css.ErrorMessageLeft}`}>
                {photoError}
              </span>
            )}
          </div>
        </div>
        <div className={css.WrapperFormSellInputs}>
          <div className={css.LabelInput}>
            <label className={css.LabelStep} htmlFor="name">
              Location
            </label>
            <input
              className={`${css.Input} ${locationError ? css.InputError : ''}`}
              type="text"
              id="place"
              value={place}
              onChange={e => setPlace(e.target.value)}
              placeholder="Type location"
            />
            {locationError && (
              <span className={css.ErrorMessage}>{locationError}</span>
            )}
          </div>
          <div className={css.WrapperTextarea}>
            <label className={css.TextareaText} htmlFor="comments">
              Comments
            </label>
            <textarea
              className={css.TextareaAdd}
              id="comments"
              value={comments}
              placeholder="Type your comment"
              onChange={e => setComments(e.target.value)}
              maxLength={120}
            />
          </div>
        </div>
      </div>
      <ul className={css.LinkAddPet}>
        <li>
          <button
            className={css.LinkAddPetCancel}
            onClick={() => handlePreviousStep(formData)}
          >
            <div className={css.ButtonEl}>
              <ArrowLeftIcon style={{ stroke: 'var(--blue-color)' }} />
              <span>Back</span>
            </div>
          </button>
        </li>
        <li>
          <button className={css.ButtonNext} onClick={handleDoneWithValidation}>
            <div className={css.ButtonEl}>
              <span>Done </span>
              <PawprintIcon style={{ fill: 'var(--bg-color)' }} />
            </div>
          </button>
        </li>
      </ul>
    </>
  );
};

export default ThirdStepFound;
