import { createContext, useState } from "react";

export const HookButtonContext = createContext();

export default function HookButtonProvider({ children }) {
    const [isTambahKelas, setIsTambahKelas] = useState(false)
    
    return (
        <HookButtonContext.Provider value={[isTambahKelas, setIsTambahKelas]}>
            {children}
        </HookButtonContext.Provider>
    )
}