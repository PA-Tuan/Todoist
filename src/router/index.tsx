import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '@/App';
import Today from '@/Pages/Today/Today';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: "", element: <Navigate to='/Today' replace /> },
            { path: "Today", element: <Today /> },
        ],
    },
]);

export default router;
