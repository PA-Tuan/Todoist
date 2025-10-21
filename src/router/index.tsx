import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '@/App';
import Today from '@/Pages/Today/Today';
import Notification from '@/Pages/Notification/Notification';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: "", element: <Navigate to='/Today' replace /> },
            { path: "Today", element: <Today /> },
            { path: "Thongbao", element: <Notification /> },
        ],
    },
]);

export default router;
