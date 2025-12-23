// src/lib/api.ts

export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

type FetchOptions = RequestInit & {
    requiresAuth?: boolean;
    json?: unknown;
};

export async function apiRequest<T = any>(endpoint: string, options: FetchOptions = {}): Promise<T> {
    const { requiresAuth, json, headers, ...customOptions } = options;

    const config: RequestInit = {
        ...customOptions,
        headers: {
            'Content-Type': 'application/json',
            ...(headers as Record<string, string>),
        },
        // We send credentials (cookies) for all requests to ensure session persistence if present
        credentials: 'include',
    };

    if (json) {
        config.body = JSON.stringify(json);
    }

    const response = await fetch(`${API_URL}${endpoint}`, config);

    if (!response.ok) {
        // Handle specific standard errors here if needed
        if (response.status === 401) {
            // Optional: redirect to login or clear local state
        }
        const error = await response.json().catch(() => ({ error: 'Unknown error' }));
        throw new Error(error.error || `Request failed with status ${response.status}`);
    }

    // Handle void response (e.g. 204)
    if (response.status === 204) {
        return {} as T;
    }

    return response.json();
}

// Typed API Functions

export const auth = {
    me: () => apiRequest('/auth/me'),
    signIn: (data: any) => apiRequest('/auth/signin', { method: 'POST', json: data }),
    signUp: (data: any) => apiRequest('/auth/signup', { method: 'POST', json: data }),
    signOut: () => apiRequest('/auth/signout', { method: 'POST' }),
};

export const contents = {
    getPaths: (slug?: string) => apiRequest(slug ? `/paths/${slug}` : '/paths'),
    getConcepts: () => apiRequest('/concepts'),
};

export const consulting = {
    createInquiry: (data: any) => apiRequest('/consulting/inquiry', { method: 'POST', json: data }),
};
