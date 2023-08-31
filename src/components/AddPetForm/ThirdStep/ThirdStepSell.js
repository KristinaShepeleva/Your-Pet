import React, { useState } from 'react';

import nextIcon from '../../../images/icons/pawprint.svg';
import backIcon from '../../../images/icons/arrow-left.svg';
import { PlusBigIcon } from '../../../helpers/icons';

import female from '../../../images/icons/female.svg';
import male from '../../../images/icons/male.svg';

import css from './ThirdStep.module.css';

const ThirdStepSell = ({ handleNext, handlePreviousStep, formData }) => {
  const [photo, setPhoto] = useState(formData.url || '');
  const [comments, setComments] = useState(formData.comments || '');
  const [place, setPlace] = useState(formData.place || '');
  const [price, setPrice] = useState(formData.price || '');

  const [sex, setSex] = useState(formData.sex || '');
  const [photoError, setPhotoError] = useState('');
  const [sexError, setSexError] = useState('');
  const [locationError, setLocationError] = useState('');
  const [priceError, setPriceError] = useState('');

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

    if (!price || isNaN(parseFloat(price)) || parseFloat(price) <= 0) {
      setPriceError('Price must be a positive number');
      isValid = false;
    } else {
      setPriceError('');
    }

    return isValid;
  };

  const handleDoneWithValidation = () => {
    if (handleValidation()) {
      handleNext();
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
                <PlusBigIcon className={css.addIconBig} />
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
              id="name"
              value={place}
              onChange={e => setPlace(e.target.value)}
              placeholder="Type location"
            />
            {locationError && (
              <span className={css.ErrorMessage}>{locationError}</span>
            )}
          </div>
          <div className={css.LabelInput}>
            <label className={css.LabelStep} htmlFor="name">
              Price
            </label>
            <input
              className={`${css.Input} ${priceError ? css.InputError : ''}`}
              type="text"
              id="name"
              value={price}
              onChange={e => setPrice(e.target.value)}
              placeholder="Type price"
            />
            {priceError && (
              <span className={css.ErrorMessage}>{priceError}</span>
            )}
          </div>
          <div className={css.WrapperTextarea}>
            <label className={css.TextareaText} htmlFor="comments">
              Comments
            </label>
            <textarea
              className={css.TextareaAddOne}
              id="comments"
              value={comments}
              placeholder="Type comment"
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
              <img src={backIcon} alt="Back" />
              <span>Back</span>
            </div>
          </button>
        </li>
        <li>
          <button className={css.ButtonNext} onClick={handleDoneWithValidation}>
            <div className={css.ButtonEl}>
              <span>Done</span>
              <img src={nextIcon} alt="Next" />
            </div>
          </button>
        </li>
      </ul>
    </>
  );
};

export default ThirdStepSell;
