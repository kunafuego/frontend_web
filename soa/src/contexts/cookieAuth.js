import { createContext, useState, useMemo, React } from "react";
import Cookies from "js-cookie";

export const cookieAuth = createContext();

const CookieAuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(false);

    const handleUserLogin = () => {
        const session = Cookies.get("koa.sess");
        if (session) {
            setCurrentUser(true);
        }
    };
    
    const handleUserLogout = () => {
        setCurrentUser(false);
        console.log("SETEANDO CURRENT USER A FALSE")
        Cookies.remove("koa.sess");
        Cookies.remove("koa.sess.sig");
    };
    
    const userStatus = useMemo(
        () => ({ currentUser, handleUserLogin, handleUserLogout }),
        [currentUser, handleUserLogin, handleUserLogout],
        );
    
        return (
            <cookieAuth.Provider value={userStatus}>
                {children}
            </cookieAuth.Provider>
        );
};
    
export default CookieAuthProvider;