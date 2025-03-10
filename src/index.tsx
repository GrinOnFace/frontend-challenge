import { createRoot } from 'react-dom/client';
import { AllCats } from './pages/AllCats/index';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import './index.scss';
import { Likes } from './pages/Likes/index';
import { Loader } from './atoms/Loader/Loader';

const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found');
}

const container = createRoot(root);

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: (
                <Suspense fallback={<Loader color='primary' size={50} thickness={3} />}>
                    <AllCats />
                </Suspense>
            ),
        },
        {
            path: '/likes',
            element: (
                <Suspense fallback={<Loader color='primary' size={50} thickness={3} />}>
                    <Likes />
                </Suspense>
            ),
        },
    ],
    {
        //basename: '/frontend-challenge/',
    },
);

container.render(<RouterProvider router={router} />);
