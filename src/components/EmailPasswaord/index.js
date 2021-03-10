import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { resetPasswordStart, resetUserState } from './../../redux/User/users.action';
import './styles.scss';

import AuthWrapper from './../AuthWrapper';
import FormInputFunc from './../forms/FormInput';
import Buttons from './../forms/Buttons';
import  Form  from 'react-bootstrap/Form';

const mapState = ({ user }) => ({
  resetPasswordSuccess: user.resetPasswordSuccess,
  userErr: user.userErr
});

const EmailPassword = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { resetPasswordSuccess, userErr } = useSelector(mapState);
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (resetPasswordSuccess) {
      dispatch(resetUserState());
      history.push('/login');
    }

  }, [resetPasswordSuccess]);// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (Array.isArray(userErr) && userErr.length > 0) {
      setErrors(userErr);
    }

  }, [userErr]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(resetPasswordStart({ email }));
  }

  const configAuthWrapper = {
    headline: 'Email Password'
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">

        {errors.length > 0 && (
          <ul>
            {errors.map((e, index) => {
              return (
                <li key={index}>
                  {e}
                </li>
              );
            })}
          </ul>
        )}

        <Form onSubmit={handleSubmit}>

          <FormInputFunc
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={e => setEmail(e.target.value)}
          />

          <Buttons type="submit">
            Email Password
          </Buttons>

        </Form>

      </div>
    </AuthWrapper>
  );
}

export default EmailPassword;