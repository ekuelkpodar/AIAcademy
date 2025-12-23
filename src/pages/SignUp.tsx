import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { useAuth } from '../hooks/useAuth';
import styles from './Auth.module.css';

const SignUp: React.FC = () => {
    const navigate = useNavigate();
    const { signUp } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);
        try {
            await signUp({ name, email, password });
            navigate('/profile');
        } catch (e: any) {
            setError(e.message || 'Failed to sign up');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Layout>
            <div className={styles.pageContainer}>
                <div className={styles.authCard}>
                    <h1 className={styles.title}>Create Account</h1>

                    {error && (
                        <div className="bg-red-500/10 border border-red-500/20 text-red-200 p-3 rounded-lg mb-4 text-sm text-center">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className={styles.authForm}>
                        <div className={styles.inputGroup}>
                            <label>Full Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className={styles.input}
                                placeholder="John Doe"
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className={styles.input}
                                placeholder="name@company.com"
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className={styles.input}
                                placeholder="Min. 8 characters"
                            />
                        </div>

                        <button type="submit" className={styles.submitButton} disabled={isLoading}>
                            {isLoading ? 'Creating Account...' : 'Sign Up'}
                        </button>

                        <div className={styles.footer}>
                            Already have an account? <Link to="/signin" className={styles.link}>Sign in</Link>
                        </div>

                        <Link to="/" className={styles.backLink}>← Back to Home</Link>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default SignUp;
