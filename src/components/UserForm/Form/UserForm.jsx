import { useFormik } from 'formik';
import {
  // CameraIcon,
  CheckIcon,
  CrossBigIcon,
  EditIcon,
  PhotoDefault,
} from 'helpers/icons';
import { useAuth } from 'hooks';
import { useState } from 'react';
import { userSchema } from 'schemas';
import { UserInput } from '../UserInput/UserInput';
import css from './UserForm.module.css';
import { LogoutUser } from 'components/UserForm/LogoutUser';
import { useDispatch } from 'react-redux';
import { updateUser } from 'redux/auth/authOperations';

export const UserForm = () => {
  const { user } = useAuth();
  const [avatarURL, setAvatarURL] = useState(null);
  const [isActive, setIsActive] = useState(true);
  const [confirmAvatar, setConfirmAvatar] = useState(false);
const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      // avatarURL: '',
      name: user.name,
      email: user.email,
      birthday: '2018-04-28',
      phone: '+3809745353530',
      city: 'Kyiv',
    },
    onSubmit: (values, actions) => {
      const formData = new FormData();
      formData.append('avatarURL', values.avatarURL);
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('birthday', values.birthday);
      formData.append('phone', values.phone);
      formData.append('city', values.city);
      setIsActive(!isActive);
      setConfirmAvatar(false);
      console.log(values);
      dispatch(updateUser(values))
      actions.resetForm();
    },
    validationSchema: userSchema,
  });
  return (
    <div className={css.wrapper}>
      <form  onSubmit={formik.handleSubmit}>
        
        <div className={isActive ? css.boxAvatar : `${css.boxAvatar} ${css.formActiv}`}>
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
          <div className={css.confirmBtBox}>
            <button
              className={css.confirmBt}
              type="button"
              onClick={() => setConfirmAvatar(false)}
            >
              {' '}
              <CheckIcon style={{ stroke:"#54ADFF",}}/>
            </button>
            <span className={css.textConfirm}>Confirm</span>
            <button className={css.confirmBt}
              type="button"
              onClick={() => {
                setConfirmAvatar(false);
                formik.setFieldValue('avatarURL', '');
                setAvatarURL(null);
              }}
            >
              {' '}
              <CrossBigIcon style={{ stroke:"#F43F5E",}} />
            </button>
          </div>
        )}
        {/* <label className={css.labelInputFale}>
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
            accept="image/*,.png,.jpg,.gif,.web"
          />
        </label> */}
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
        {!isActive && (<div className={css.saveBtBox}><button className={css.saveBt} type="submit">Save</button></div>)}
      </form>
      {isActive ? (
        <button
          className={css.EditCloseBt}
          type="button"
          onClick={() => setIsActive(!isActive)}
        >
          <EditIcon />
        </button>
      ) : (
        <button
          className={css.EditCloseBt}
          type="reset"
          onClick={() => {
            formik.resetForm();
            setIsActive(!isActive);
            setAvatarURL(null);
            setConfirmAvatar(false);
          }}
        >
          <CrossBigIcon className={css.iconPhoto} />
        </button>
      )}
      {isActive && (<LogoutUser />)}
    </div>
  );
};
