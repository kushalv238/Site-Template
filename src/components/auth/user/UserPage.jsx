import { useSelector } from 'react-redux'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { useUserAuth } from '../../../context/UserAuthContext'
import toast from 'react-hot-toast';
import removeFirebasePrefix from '../../../utility/removeFirebasePrefix';

const User = () => {
    const user = useSelector(state => state.user.userInfo);

    const { logOut } = useUserAuth();

    const handleLogout = async () => {
        try {
            await logOut()
            toast.success("Successfully Logged Out!", {icon: "👋"})
        } catch (err) {
            toast.error(removeFirebasePrefix(err.message))
        }
    }

    return (
        <div className="auth-wrapper">
            <div className='auth-cards'>
				{
                    (user && user.photoURL)
                    ? <img className="userProfileImg w-36 self-center" src={user.photoURL} alt='user profile img' title={user.name} />
                    : <div className="userAccordianWrapper">
                        <AccountCircleIcon style={{fontSize: 100}} />
                    </div>
                }

                <p><span className='text-xl underline'>Name:</span> {user?.displayName}</p>
                <p><span className='text-xl underline'>Email:</span> {user?.email}</p>
            </div>
            <div className="auth-cards">
                <button className="application-button" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default User