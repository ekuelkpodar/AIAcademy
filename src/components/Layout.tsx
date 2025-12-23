import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Map, Library, Tent, User, GraduationCap, Github, Briefcase, LogOut } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import styles from './Layout.module.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { user, signOut } = useAuth();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        await signOut();
        navigate('/');
    };

    return (
        <div className={styles.layout}>
            {/* Horizontal Header */}
            <header className={styles.header}>
                <div className={styles.sidebarHeader} onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                    <h1 className={`${styles.logoTitle} text-gradient`}>Applied Insights</h1>
                    <p className={styles.logoSubtitle}>30-60 Day Mastery</p>
                </div>

                <nav className={styles.nav}>
                    <NavItem to="/" icon={<LayoutDashboard size={18} />} label="Overview" />
                    <NavItem to="/roadmap" icon={<Map size={18} />} label="Roadmap" />
                    <NavItem to="/concepts" icon={<GraduationCap size={18} />} label="Concept Map" />
                    <NavItem to="/library" icon={<Library size={18} />} label="Resource Library" />
                    <NavItem to="/projects" icon={<Tent size={18} />} label="Projects" />
                    <NavItem to="/services" icon={<Briefcase size={18} />} label="Services" />
                    {user?.role && (user.role === 'INSTRUCTOR' || user.role === 'ADMIN') && (
                        <NavItem to="/teach" icon={<GraduationCap size={18} />} label="Teacher Mode" />
                    )}
                </nav>

                <div className={styles.rightSection}>
                    {/* Hire Us CTA */}
                    <button className={styles.hireUsBtn} onClick={() => document.getElementById('hire-us')?.scrollIntoView({ behavior: 'smooth' })}>
                        <Briefcase size={16} /> Hire Us
                    </button>

                    {user ? (
                        <div className={styles.userMenu}>
                            <NavItem to="/profile" icon={<User size={18} />} label="My Progress" />
                            <button onClick={handleSignOut} className={styles.authBtn} title="Sign Out">
                                <LogOut size={18} />
                            </button>
                        </div>
                    ) : (
                        <div className={styles.authLinks}>
                            <NavLink to="/signin" className={styles.authLink}>Sign In</NavLink>
                            <NavLink to="/signup" className={`${styles.authLink} ${styles.primaryAuth}`}>Sign Up</NavLink>
                        </div>
                    )}
                </div>

                {/* Mobile Menu Toggle would go here */}
            </header>

            {/* Main Content */}
            <main className={styles.main}>
                <div>
                    {children}
                </div>
            </main>
        </div>
    );
};

const NavItem: React.FC<{ to: string; icon: React.ReactNode; label: string }> = ({ to, icon, label }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.navItemActive : ''}`
            }
        >
            <span className={styles.navIcon}>
                {icon}
            </span>
            <span>{label}</span>
        </NavLink>
    );
};

export default Layout;
