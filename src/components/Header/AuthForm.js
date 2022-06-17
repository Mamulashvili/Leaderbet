import { useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Form/Input';
import userIcon from '../../assets/images/user.png';
import passwordIcon from '../../assets/images/password.png';

export const AuthForm = () => {
  const [ user, setUser ] = useState({});

  return (
    <div className='auth-form-wrapper flex'>
      <Button
        text='რეგისტრაცია'
        classList='registration-btn'
      />
      <Input
        placeholder='სახელი'
        inputWrapperClassList='input-wrapper'
        appendElement={
          <img
            src={userIcon}
            alt='User icon'
          />
        }
        prependElement={RecoveryButton()}
        onChange={value => setUser({ ...user, username: value })}
      />
      <Input
        placeholder='პაროლი'
        inputWrapperClassList='input-wrapper'
        appendElement={
          <img
            src={passwordIcon}
            alt='Password icon'
          />
        }
        prependElement={RecoveryButton()}
        onChange={value => setUser({ ...user, password: value })}
      />
      <Button
        text='შესვლა'
        classList='login-btn'
        onClick={() => alert(JSON.stringify(user))}
      />
    </div>
  );
};

const RecoveryButton = () => {
  return (
    <Button
      text='აღდგენა'
      classList='recovery-btn'
      onClick={() => alert('Password recovery')}
    />
  );
};