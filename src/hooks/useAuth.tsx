import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../lib/api';

interface User {
    id: string;
    email: string;
    name?: string;
    role: 'LEARNER' | 'INSTRUCTOR' | 'ADMIN';
}

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    signIn: (data: any) => Promise<void>;
    signUp: (data: any) => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        checkUser();
    }, []);

    async function checkUser() {
        try {
            const { user } = await auth.me();
            setUser(user);
        } catch (e) {
            setUser(null);
        } finally {
            setIsLoading(false);
        }
    }

    async function signIn(data: any) {
        const { user } = await auth.signIn(data);
        setUser(user);
    }

    async function signUp(data: any) {
        const { user } = await auth.signUp(data);
        setUser(user);
    }

    async function signOut() {
        await auth.signOut();
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, isLoading, signIn, signUp, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
