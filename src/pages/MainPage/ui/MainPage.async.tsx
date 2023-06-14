import { lazy } from 'react';
// При такой реализации важно, чтобы компонент экспортировался по дефолту
export const MainPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./MainPage')), 1000);
}));
