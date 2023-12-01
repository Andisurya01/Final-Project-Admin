import { createContext, useState } from "react";

export const TokenContext = createContext();

export default function TokenProvider({ children }) {
    const [token, setToken] = useState("")
    
    return (
        <TokenProvider.Provider value={[token, setToken]}>
            {children}
        </TokenProvider.Provider>
    )
}