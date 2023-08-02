import { register, signin } from '@/lib/api';
import React, { FC, useState } from "react";

type Props = {
  type: 'signin' | 'register';
}

const AuthForm: FC<Props> = ({ type }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (type === 'signin') {
      signin({
        email,
        password,
      });
    } else {
      register({
        email,
        password,
      });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>{type === 'register' ? 'Register' : 'Sign in'}</h1>
      <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">{type === 'register' ? 'Register' : 'Sign in'}</button>
    </form>
  );
};

export default AuthForm;
