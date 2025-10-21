import { NavLink } from 'react-router-dom';
import Styles from './styles.module.scss';
import UserIcon from '@icons/User.svg';
import Bell from '@icons/Notification.svg'
import Sidebar from '@icons/Sidebar.svg'

function Navbar() {
    return (
        <div className={Styles.container}>
            <div className={Styles.headerNav}>
                <button className={Styles.user}>
                    <img src={UserIcon} />
                    <p>Username</p>
                </button>
                <div className={Styles.notifications}>
                    <NavLink to='/thongbao' className={Styles.notification}>
                        <img src={Bell} />
                    </NavLink>
                    <button className={Styles.sidebar}>
                        <img src={Sidebar} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
