import { lazy } from 'react';
// При такой реализации важно, чтобы компонент экспортировался по дефолту
export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ProfilePage')), 1000);
}));
