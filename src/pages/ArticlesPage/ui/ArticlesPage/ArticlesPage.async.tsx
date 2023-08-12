import { lazy } from 'react';
// При такой реализации важно, чтобы компонент экспортировался по дефолту
export const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticlesPage')), 1000);
}));
