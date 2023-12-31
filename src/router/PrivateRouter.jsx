import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

const PrivateRouter = ({children, ...rest}) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return isAuthenticated ? children : <Navigate to={"/"} />;
};

export default PrivateRouter;