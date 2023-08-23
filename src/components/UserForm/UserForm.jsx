import { useFormik } from 'formik';
import {
  CameraIcon,
  CheckIcon,
  CrossBigIcon,
  CrossSmallIcon,
  EditIcon,
  PhotoDefault,
} from 'helpers/icons';
import { useAuth } from 'hooks';
import {  useState } from 'react';
import { userSchema } from 'schemas';
import { UserInput } from './UserInput';
import css from './UserForm.module.css';

export const UserForm = () => {
  const { user } = useAuth();
  const [avatarURL, setAvatarURL] = useState(null);
  const [isActive, setIsActive] = useState(true);
  const [confirmAvatar, setConfirmAvatar] = useState(false);
console.log(confirmAvatar);
  const formik = useFormik({
    initialValues: {
      avatarURL: '',
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
      actions.resetForm();
    },
    validationSchema: userSchema,
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div>
          {avatarURL ? (
            <img src={URL.createObjectURL(avatarURL)} alt="avatar" />
          ) : user?.avatarURL ? (
            <img src={user.avatarURL} alt="avatar" />
          ) : (
            <div>
              <PhotoDefault />
            </div>
          )}
        </div>
       {!isActive && confirmAvatar && ( <div>
          <button
            type="button"
            style={{ color: 'blue' }}
            onClick={() => setConfirmAvatar(false)}
          >
            {' '}
            <CheckIcon />
          </button>
          <p>Confirm</p>
          <button
            type="button"
        
            onClick={() => {
              setConfirmAvatar(false);
              formik.setFieldValue('avatarURL', '');
              setAvatarURL(null);
            
            }}
          >
            {' '}
            <CrossSmallIcon />
          </button>
        </div>)}
        <label>
        {!isActive && !confirmAvatar && ( <div onClick={() => setConfirmAvatar(true)}>
                    <CameraIcon /> <p>Edit photo</p>
          </div>)}

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
        </label>
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

        {!isActive && <button type="submit">Save</button>}
  
      </form>
      {isActive ? (
        <button type="button" onClick={() => setIsActive(!isActive)}>
          <EditIcon />
        </button>
      ) : (
        <button
          type="reset"
          onClick={() => {
            formik.resetForm();
            setIsActive(!isActive);
            setAvatarURL(null);
            setConfirmAvatar(false)
          }}
        >
          {' '}
          <CrossBigIcon />
        </button>
      )}
    </>
  );
};
