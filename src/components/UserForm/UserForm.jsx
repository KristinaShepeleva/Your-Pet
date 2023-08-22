import { Field, Form, Formik } from 'formik';
// import { useDispatch } from "react-redux";
// import { FormError } from "./FormError";
import { userSchema } from '../../schemas';
import { FormError } from './FormError';
import { CrossSmallIcon, EditIcon } from '../../helpers/icons';
import { useState } from 'react';

const initialValues = {
  photo: '',
  name: 'AAA1dgdgdg',
  email: '',
  birthday: '2018-04-28',
  phone: '',
  city: '',
};
export const UserForm = () => {
  const [isActive, setIsActive] = useState(true);
  //  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    // dispatch(logIn(values));
      console.log(actions);
    console.log(values);
      actions.resetForm();
      toggleIsActive()
    };
    
    console.log(isActive, 'isActive');
    const toggleIsActive = () => {
        setIsActive(!isActive);
        // Formik.resetForm()
        
    }
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={userSchema}
      >
              {formik => {
                  const stopEditingData= () => {
                      formik.resetForm()
                      toggleIsActive();
                  }
          return (
            <Form>
              <label>
                <Field name="photo" type="file" disabled={isActive} />
                <FormError name="photo" />
              </label>
              <label>
                <p>Name:</p>
                <Field name="name" type="text" disabled={isActive} />
                <FormError name="name" />
              </label>
              <label>
                <p>Email</p>
                <Field name="email" type="email" disabled={isActive} />
                <FormError name="email" />
              </label>
              <label>
                <p>Birthday:</p>
                <Field name="birthday" type="date" disabled={isActive} />
                <FormError name="birthday" />
              </label>
              <label>
                <p>Phone:</p>
                <Field name="phone" type="tel" disabled={isActive} />
                <FormError name="phone" />
              </label>
              <label>
                <p>City:</p>
                <Field name="city" type="text" disabled={isActive} />
                <FormError name="city" />
              </label>
                  {!isActive && (<button type="submit">Save</button>)}
               
                {/* {isActive ?           <button type='button' onClick={() => setIsActive(!isActive)}><EditIcon /></button>
 : <button type='button' onClick={stopEditingData}> <CrossSmallIcon /></button>} */}
              </Form>
          );
        }}
          </Formik>
        {/* {isActive ?           <button type='button' onClick={() => setIsActive(!isActive)}><EditIcon /></button>
 : <button type='button' onClick={}> <CrossSmallIcon /></button>} */}
    </div>
  );
};
