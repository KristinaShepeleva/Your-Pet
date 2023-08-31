import { useState } from 'react';
import PropTypes from 'prop-types';

import css from './SecondStep.module.css';

import { ArrowLeftIcon, PawprintIcon } from 'helpers/icons';

const SecondStepSell = ({
  handleNext,
  handlePreviousStep,
  formData,
  doneSubmit2,
}) => {
  const [name, setName] = useState(formData.name || '');
  const [title, setTitle] = useState(formData.title || '');
  const [birthday, setBirthday] = useState(formData.birthday || '');
  const [breed, setBreed] = useState(formData.breed || '');

  const [titleError, setTitleError] = useState('');
  const [nameError, setNameError] = useState('');
  const [birthdayError, setBirthdayError] = useState('');
  const [breedError, setBreedError] = useState('');

  const validateTitle = () => {
    const regex = /^[A-Za-z\s]+$/;
    if (!title || title.length < 2 || title.length > 16 || !regex.test(title)) {
      setTitleError(css.InputError);
      return false;
    }
    setTitleError('');
    return true;
  };

  const validateName = () => {
    const regex = /^[A-Za-z\s]+$/;
    if (!name || name.length < 2 || name.length > 16 || !regex.test(name)) {
      setNameError(css.InputError);
      return false;
    }
    setNameError('');
    return true;
  };

  const validateBirthday = () => {
    if (!birthday) {
      setBirthdayError(css.InputError);
      return false;
    }
    setBirthdayError('');
    return true;
  };

  const validateBreed = () => {
    const regex = /^[A-Za-z\s]+$/;
    if (!breed || breed.length < 2 || breed.length > 16 || !regex.test(breed)) {
      setBreedError(css.InputError);
      return false;
    }
    setBreedError('');
    return true;
  };

  const handleValidation = () => {
    const isTitleValid = validateTitle();
    const isNameValid = validateName();
    const isBirthdayValid = validateBirthday();
    const isBreedValid = validateBreed();

    return isTitleValid && isNameValid && isBirthdayValid && isBreedValid;
  };

  const handleNextWithValidation = () => {
    if (handleValidation()) {
      handleNext(1, { name, title, birthday, breed });
      const noticeStep2 = {
        name,
        title,
        birthday,
        breed,
      };
      doneSubmit2(noticeStep2);
    }
  };

  return (
    <div className={css.FormWrapper}>
      <div className={css.WrapperLabelInput}>
        <label className={css.LabelStep} htmlFor="title">
          Title of add
        </label>
        <input
          className={`${css.Input} ${titleError}`}
          type="text"
          id="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          onBlur={validateTitle}
          placeholder="Title of add"
        />
        {titleError && (
          <span className={`${css.ErrorMessage}`}>
            Title must be between 2 and 16 characters
          </span>
        )}
      </div>
      <div className={css.WrapperLabelInput}>
        <label className={css.LabelStep} htmlFor="name">
          Pet’s name
        </label>
        <input
          className={`${css.Input} ${nameError}`}
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
          onBlur={validateName}
          placeholder="Type name pet"
        />
        {nameError && (
          <span className={`${css.ErrorMessage}`}>
            Name must be between 2 and 16 characters
          </span>
        )}
      </div>
      <div className={css.WrapperLabelInput}>
        <label className={css.LabelStep} htmlFor="birthday">
          Date of birth
        </label>
        <input
          className={`${css.Input} ${birthdayError}`}
          type="date"
          id="birthday"
          value={birthday}
          onChange={e => setBirthday(e.target.value)}
          onBlur={validateBirthday}
        />
        {birthdayError && (
          <span className={`${css.ErrorMessage}`}>
            Date of birth is required
          </span>
        )}
      </div>
      <div className={css.WrapperLabelInput}>
        <label className={css.LabelStep} htmlFor="type">
          Type
        </label>
        <input
          className={`${css.Input} ${breedError}`}
          type="text"
          id="type"
          value={breed}
          onChange={e => setBreed(e.target.value)}
          onBlur={validateBreed}
          required
          placeholder="Type of pet"
        />
        {breedError && (
          <span className={`${css.ErrorMessage}`}>
            Breed must be between 2 and 16 characters
          </span>
        )}
      </div>
      <ul className={css.LinkAddPet}>
        <li>
          <button
            className={css.LinkAddPetCancel}
            onClick={() =>
              handlePreviousStep(-1, { name, birthday, breed, title })
            }
          >
            <div className={css.ButtonEl}>
              <ArrowLeftIcon style={{ stroke: 'var(--blue-color)' }} />
              <span>Back</span>
            </div>
          </button>
        </li>
        <li>
          <button className={css.ButtonNext} onClick={handleNextWithValidation}>
            <div className={css.ButtonEl}>
              <span>Next</span>
              <PawprintIcon style={{ fill: 'var(--bg-color)' }} />
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SecondStepSell;
SecondStepSell.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handlePreviousStep: PropTypes.func.isRequired,
  formData: PropTypes.shape(),
  doneSubmit2: PropTypes.func.isRequired,
};
