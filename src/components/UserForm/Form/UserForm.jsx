import { useFormik } from 'formik';
import {
  CameraIcon,
  CrossBigIcon,
  EditIcon,
  PhotoDefault,
} from 'helpers/icons';
import { useAuth } from 'hooks';
import { useState } from 'react';
import { userSchema } from 'schemas';
import { UserInput } from '../UserInput/UserInput';
import css from './UserForm.module.css';
import { useDispatch } from 'react-redux';
import { updateUser, updateUserAvatar } from 'redux/auth/authOperations';
import { AvatarConfirmButtons } from '../AvatarConfirmButtons/AvatarConfirmButtons';
import { LogoutUser } from '../LogoutUser/LogoutUser';
import { FormActivationToggleButton } from '../FormActivationToggleButton/FormActivationToggleButton';

export const UserForm = () => {
  const { user } = useAuth();
  const [avatarURL, setAvatarURL] = useState(null);
  const [isActive, setIsActive] = useState(true);
  const [confirmAvatar, setConfirmAvatar] = useState(false);
  
  const formattedDates = (date) => {
    if (date === null) { return "" }
    let formatteBirthday = new Date(date).toISOString().split("T")[0] ; 
   
    return formatteBirthday
}
  

  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      avatarURL: user.avatarURL,
      name: user.name,
      email: user.email,
      birthday: formattedDates(user.birthday),
      phone: user.phone,
      city: user.city,
  },
    onSubmit: (values, actions) => {
      const avatarURL = new FormData();
      avatarURL.append('avatarURL', values.avatarURL);
     
      const formData = {
        name: values.name,
        email: values.email,
        birthday: values.birthday,
        phone: values.phone,
          city: values.city,

      }
      // console.log('avatarURL', avatarURL);
      //  console.log("formData", formData);
    
      setIsActive(!isActive);
      setConfirmAvatar(false);
      // console.log(values);
      dispatch(updateUser(formData));
      dispatch(updateUserAvatar(avatarURL))
      actions.resetForm();
    },
    validationSchema: userSchema,
  });

  const rejectAvatar = () => {
    setConfirmAvatar(false);
    formik.setFieldValue('avatarURL', '');
    setAvatarURL(null);
  };

  const disableForm = () => {
    formik.resetForm();
    setIsActive(!isActive);
    setAvatarURL(null);
    setConfirmAvatar(false);
  };

  return (
    <div className={css.wrapper}>
      <form className={css.form} onSubmit={formik.handleSubmit}>
        <div className={css.avatarGroup}>
        <div
          className={
            isActive ? css.boxAvatar : `${css.boxAvatar} ${css.formActive}`
          }
        >
          {avatarURL ? (
            <img
              className={css.imgAvatar}
              src={URL.createObjectURL(avatarURL)}
              alt="avatar"
            />
          ) : user?.avatarURL ? (
            <img className={css.imgAvatar} src={user.avatarURL} alt="avatar" />
          ) : (
            <PhotoDefault />
          )}
        </div>

        {!isActive && confirmAvatar && (
          <AvatarConfirmButtons
            acceptAvatar={() => setConfirmAvatar(false)}
            rejectAvatar={rejectAvatar}
          />
        )}
          <label className={css.labelInputFale}>
            
          {!isActive && !confirmAvatar && (
            <button
              className={css.editAvatarBt}
              type="button"
              onClick={() => setConfirmAvatar(true)}
            >
              <CameraIcon className={css.editAvatarIcon} /> Edit photo
              </button>
                          )}

          <input
            className={css.inputFile}
            name="avatarURL"
            type="file"
            disabled={isActive}
            onChange={e => {
              formik.setFieldValue('avatarURL', e);
              setAvatarURL(e.target.files[0]);
            }}
            accept="image/*,.png,.jpg"
            />
                      {formik.touched.avatarURL && formik.errors.avatarURL && (<span className={css.errorText}>{ formik.errors.avatarURL}</span>)}

          </label>
        </div>
        <div className={css.box}>
        <div className={css.formGroup}>
          <UserInput
            text="Name"
            name="name"
            type="text"
            isActive={isActive}
            onChange={formik.handleChange}
            value={formik.values.name}
            error={formik.touched.name && formik.errors.name}
            helperText={formik.errors.name}
          />
          <UserInput
            text="Email"
            name="email"
            type="email"
            isActive={isActive}
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.touched.email && formik.errors.email}
            helperText={formik.errors.email}
          />
          <UserInput
            text="Birthday"
            name="birthday"
            type="date"
            isActive={isActive}
            onChange={formik.handleChange}
            value={formik.values.birthday}
            error={formik.touched.birthday && formik.errors.birthday}
            helperText={formik.errors.birthday}
          />
          <UserInput
            text="Phone"
            name="phone"
            type="tel"
            isActive={isActive}
            onChange={formik.handleChange}
            value={formik.values.phone}
            error={formik.touched.phone && formik.errors.phone}
            helperText={formik.errors.phone}
          />
          <UserInput
            text="City"
            name="city"
            type="text"
            isActive={isActive}
            onChange={formik.handleChange}
            value={formik.values.city}
            error={formik.touched.city && formik.errors.city}
            helperText={formik.errors.city}
          />
        </div>
        {!isActive && (
          <div className={css.saveBtBox}>
            <button className={css.saveBt} type="submit">
              Save
            </button>
          </div>
          )}
          </div>
      </form>

        {isActive ? (
        <FormActivationToggleButton iconComponent={EditIcon} type="reset" toggle={() => setIsActive(!isActive)} />
      ) : (
          <FormActivationToggleButton iconComponent={CrossBigIcon}type="button" toggle={disableForm} />
      )}
    
      {isActive && <LogoutUser />}
    </div>
  );
};
