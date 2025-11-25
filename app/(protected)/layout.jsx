'use client'
import { useAuth } from "@/app/lib/AuthContext";
import { useLayoutEffect } from "react";
import { redirect, usePathname } from 'next/navigation';

function Protected({ children }) {
    const { user, loading } = useAuth();
    const returnUrl = usePathname();

    useLayoutEffect(() => {
        // Jeśli ładowanie zakończone i brak usera -> przekieruj
        if (!loading && !user) {
            redirect(`/user/signin?returnUrl=${returnUrl}`);
        }
    }, [user, loading, returnUrl]);

    // Jeśli loading trwa, nic nie pokazuj (lub spinner), jeśli user jest -> pokaż treść
    if (loading) return null;
    
    return user ? <>{children}</> : null;
}

export default Protected;