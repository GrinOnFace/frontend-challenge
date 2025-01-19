import { createRoot } from 'react-dom/client';
import { App } from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import './App.scss';
import Likes from './pages/Likes';
import { Loader } from './components/Loader/Loader';

const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found');
}

const container = createRoot(root);

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
        },
        {
            path: '/likes',
            element: (
                <Suspense fallback={<Loader />}>
                    <Likes />
                </Suspense>
            ),
        },
    ],
    {
        //basename: '/frontend-challenge'
    },
);

// export const Context = createContext({
//     store,
// })

// container.render(
//   <Context.Provider value={{store}}>
//       <RouterProvider router={router} />
//   </Context.Provider>,
// )

container.render(<RouterProvider router={router} />);
