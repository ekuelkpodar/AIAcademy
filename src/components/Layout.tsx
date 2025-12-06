import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Map, Library, Tent, User, GraduationCap, Github } from 'lucide-react';
import styles from './Layout.module.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className={styles.layout}>
            {/* Horizontal Header */}
            <header className={styles.header}>
                <div className={styles.sidebarHeader}>
                    <h1 className={`${styles.logoTitle} text-gradient`}>AI Academy</h1>
                    <p className={styles.logoSubtitle}>30-60 Day Mastery</p>
                </div>

                <nav className={styles.nav}>
                    <NavItem to="/" icon={<LayoutDashboard size={18} />} label="Overview" />
                    <NavItem to="/roadmap" icon={<Map size={18} />} label="Roadmap" />
                    <NavItem to="/concepts" icon={<GraduationCap size={18} />} label="Concept Map" />
                    <NavItem to="/library" icon={<Library size={18} />} label="Resource Library" />
                    <NavItem to="/projects" icon={<Tent size={18} />} label="Projects" />
                    <NavItem to="/teach" icon={<GraduationCap size={18} />} label="Teacher Mode" />
                </nav>

                <div className={styles.rightSection}>
                    <NavItem to="/profile" icon={<User size={18} />} label="My Progress" />
                    <a href="#" className={styles.openSourceLink} title="View Source">
                        <Github size={18} />
                    </a>
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
