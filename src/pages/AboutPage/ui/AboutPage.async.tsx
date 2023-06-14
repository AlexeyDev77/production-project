import { lazy } from 'react';
// При такой реализации важно, чтобы компонент экспортировался по дефолту
export const AboutPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./AboutPage')), 1000);
}));
