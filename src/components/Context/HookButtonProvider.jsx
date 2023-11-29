import { createContext, useState } from "react";

export const HookButtonContext = createContext();

export default function HookButtonProvider({ children }) {
    const [addClass, setAddClass] = useState(false)
    
    return (
        <HookButtonContext.Provider value={[addClass, setAddClass]}>
            {children}
        </HookButtonContext.Provider>
    )
}