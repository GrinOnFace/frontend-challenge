import { FC, LazyExoticComponent, lazy } from 'react';

export const SectionLazy: LazyExoticComponent<FC> = lazy(() => import('./Likes'))