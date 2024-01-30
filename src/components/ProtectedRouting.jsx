import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from 'react-redux'

import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const ProtectedRouting = () => {
    let user = useSelector(state => state.user?.userInfo);

    if (!user) {
        toast("You need to login to access this page", { icon: <FontAwesomeIcon icon={faUser} /> });
        return <Navigate to='auth/login' />
    }

    return <Outlet />;
}

export default ProtectedRouting