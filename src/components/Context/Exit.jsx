import { createContext, useState } from "react";
import HookButtonProvider from "./HookButtonProvider";

export const ExitContext = createContext();

export default function ExitProvider({ children }) {
    const [exit, setexit] = useState(false)

    return (
        <HookButtonProvider>

            <ExitProvider.Provider value={[exit, setexit]}>
                {children}
            </ExitProvider.Provider>

        </HookButtonProvider>
    )
}