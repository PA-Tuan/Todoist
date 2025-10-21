import { Outlet } from 'react-router-dom';
import Navbar from '@components/Navbar/Navbar';

function App() {
    return (
        <div style={{display: 'flex', gap: '20px'}}>
            <Navbar />
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default App;
