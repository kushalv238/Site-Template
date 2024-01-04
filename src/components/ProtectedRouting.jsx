import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from 'react-redux'

const ProtectedRouting = () => {
    let user = useSelector(state => state.user?.userInfo);

    if(!user) {
        return <Navigate to='auth/login' />
    }
    
    return <Outlet />;
}

export default ProtectedRouting