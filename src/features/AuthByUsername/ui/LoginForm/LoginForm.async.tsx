import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';
// При такой реализации важно, чтобы компонент экспортировался по дефолту
export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./LoginForm')), 1000);
}));
