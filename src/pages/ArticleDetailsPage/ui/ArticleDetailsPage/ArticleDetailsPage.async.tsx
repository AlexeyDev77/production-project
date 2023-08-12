import { lazy } from 'react';
// При такой реализации важно, чтобы компонент экспортировался по дефолту
export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 1000);
}));
