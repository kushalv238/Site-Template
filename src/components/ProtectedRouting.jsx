import { Navigate } from "react-router-dom";

import { useSelector } from 'react-redux'

const ProtectedRouting = ({ children }) => {
    let user = useSelector(state => state.user?.userInfo);

    if(!user) {
        return <Navigate to='/' />
    }
    
    return children;
}

export default ProtectedRouting