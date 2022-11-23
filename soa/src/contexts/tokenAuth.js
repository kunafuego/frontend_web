import { useMemo, createContext } from "react";
import useLocalStorage from "../hoooks/useLocalStorage";

export const tokenAuth = createContext();

const TokenAuthProvider = ({ children }) => {

    const [currentSimulations, storeSimulations, clearStoredSimulations] = useLocalStorage('simulacions')

    const handleTokenChange = (token) => {
        storeSimulations(token);
    };

    const simulationsStatus = useMemo(
        () => ({ currentSimulations, handleTokenChange}),
        [currentSimulations, handleTokenChange],
    );

    return (
        <tokenAuth.Provider value={simulationsStatus}>
            {children}
        </tokenAuth.Provider>
    );
};

export default TokenAuthProvider;