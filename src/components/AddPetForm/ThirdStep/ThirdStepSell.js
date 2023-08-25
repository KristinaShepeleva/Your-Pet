import React, { useState } from 'react';

import nextIcon from '../../../images/icons/pawprint.svg';
import backIcon from '../../../images/icons/arrow-left.svg';
import PetAdd from '../../../images/icons/plus-big.svg';
import female from '../../../images/icons/female.svg';
import male from '../../../images/icons/male.svg';

import css from './ThirdStep.module.css';

const ThirdStepSell = ({ handleNext, handlePreviousStep, formData }) => {
  const [photo, setPhoto] = useState(formData.url || '');
  const [comments, setComments] = useState(formData.comments || '');
  const [place, setPlace] = useState(formData.place || '');
  const [price, setPrice] = useState(formData.price || '');

  const handleFileChange = e => {
    setPhoto(e.target.files[0]);
  };

  return (
    <>
      <div className={css.WrapperForm}>
        <div className={css.WrapperPotoSell}>
          <div className={css.SexText}>The Sex</div>
          <ul className={css.SexOption}>
            <li>
              <button className={css.SexElement}>
                <img src={female} alt="female" />
                Female
              </button>
            </li>
            <li>
              <button className={css.SexElement}>
                <img src={male} alt="male" />
                Male
              </button>
            </li>
          </ul>
          <div className={css.WrapperAddPhoto}>
            <label className={css.LabelAddText}>Load the pet’s image:</label>
            <input
              type="file"
              id="photo"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            <label htmlFor="photo">
              <div className={css.LabelAdd}>
                {photo && (
                  <img
                    className={css.PreviewPhoto}
                    src={URL.createObjectURL(photo)}
                    alt="Selected img"
                  />
                )}
                <img className={css.IconAdd} src={PetAdd} alt="add" />
              </div>
            </label>
          </div>
        </div>
        <div className={css.WrapperFormSellInputs}>
          <div className={css.LabelInput}>
            <label className={css.LabelStep} htmlFor="name">
              Location
            </label>
            <input
              className={css.Input}
              type="text"
              id="name"
              value={place}
              onChange={e => setPlace(e.target.value)}
              placeholder="Type location"
            />
          </div>
          <div className={css.LabelInput}>
            <label className={css.LabelStep} htmlFor="name">
              Price
            </label>
            <input
              className={css.Input}
              type="text"
              id="name"
              value={price}
              onChange={e => setPrice(e.target.value)}
              placeholder="Type price"
            />
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
          <button className={css.ButtonNext} onClick={handleNext}>
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
