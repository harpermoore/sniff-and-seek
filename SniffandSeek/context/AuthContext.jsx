import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider({children}) { 
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);

    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}

