import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { addNotice } from 'redux/notices/operation';
import { addPet } from 'redux/pets/petsOperations';
import CurrentStep from './CurrentStep';
import FirstStep from './FirstStep/FirstStep';
import SecondStepRender from './SecondStep/SecondStepRender';
import ThirdStepRender from './ThirdStep/ThirdStepRender';

import css from './AddPetPage.module.css';

function AddPetPage() {
  const [state, setState] = useState({
    step: 1,
    currentStep: 1,
    selectedOption: 'your-pet',
    activeButton: 1,
    isLoading: false,
    formData: {},
  });
  const [notice, setNotice] = useState({});
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const updateState = changes => {
    setState(prevState => ({
      ...prevState,
      ...changes,
    }));
  };

  const handleOptionChange = (option, number) => {
    updateState({
      formData: {},
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
    }
    updateState({ isLoading: false });
    updateState({ formData: { ...state.formData, ...stepData } });
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const getStepTitle = () => {
    const titleOptions = {
      'your-pet': 'Add pet',
      sell: 'Add pet for sell',
      'lost-found': 'Add lost pet',
      'in-good-hands': 'Add pet in good hands',
    };

    if (state.step === 1) {
      return 'Add pet';
    } else {
      const selectedTitle = titleOptions[state.selectedOption] || 'Text';
      return selectedTitle;
    }
  };

  // //////////////////////
  const doneSubmit2 = step2 => {
    setNotice(step2);
  };
  const doneSubmit3 = step3 => {
    updateState({
      formData: {
        ...state.formData,
        step3: {
          ...state.formData.step3,
          ...step3,
        },
      },
    });
    setNotice(prevState => ({ ...prevState, ...step3 }));
  };

  useEffect(() => {
    if (
      state.selectedOption === 'your-pet' &&
      notice.photo &&
      notice.comments &&
      notice.name &&
      notice.birthday
    ) {
      const newNotice = new FormData();
      newNotice.append('photoURL', notice.photo);
      newNotice.append('birthday', notice.birthday);
      newNotice.append('type', notice.breed);
      newNotice.append('comments', notice.comments);
      newNotice.append('name', notice.name);

      dispatch(addPet(newNotice)).then(data => {
        if (data.type === 'pets/addPet/fulfilled') {
          toast.success('The pet was added.');
          navigate('/user');
        }
      });
      setNotice({});
      updateState({
        formData: {},
      });
    }

    if (
      notice.photo &&
      notice.comments &&
      state.selectedOption &&
      notice.name &&
      notice.birthday &&
      notice.breed &&
      state.selectedOption !== 'your-pet'
    ) {
      const newNotice = new FormData();
      newNotice.append('imgUrl', notice.photo);
      newNotice.append('birthday', notice.birthday);
      newNotice.append('type', notice.breed);
      newNotice.append('comments', notice.comments);
      newNotice.append('name', notice.name);
      newNotice.append('location', notice.place);
      newNotice.append('price', notice.price);
      newNotice.append('sex', notice.sex);
      newNotice.append('title', notice.title);
      newNotice.append('category', state.selectedOption);

      dispatch(addNotice(newNotice)).then(data => {
        if (data.type === 'notices/addNotice/fulfilled') {
          toast.success('The pet was added.');
          navigate(`/notices/${state.selectedOption}`);
        }
      });
      setNotice({});
      updateState({
        formData: {},
      });
    }
  }, [dispatch, navigate, notice, state]);

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
            updateState={updateState}
          />
        )}
        {state.step === 2 && (
          <SecondStepRender
            selectedOption={state.selectedOption}
            handleNext={handleStepChange}
            handlePreviousStep={handleStepChange}
            formData={state.formData}
            doneSubmit2={doneSubmit2}
          />
        )}
        {state.step === 3 && (
          <ThirdStepRender
            selectedOption={state.selectedOption}
            handlePreviousStep={handleStepChange}
            formData={state.formData}
            doneSubmit3={doneSubmit3}
          />
        )}
      </div>
    </>
  );
}

export default AddPetPage;
