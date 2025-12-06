import React from 'react';
import Layout from '../components/Layout';
import { PROJECTS } from '../data/mockData';
import { Clock, Wrench, BarChart2, ArrowRight } from 'lucide-react';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
    return (
        <Layout>
            <div className={styles.container}>

                <div className={styles.header}>
                    <h1 className={styles.title}>Hands-On Projects</h1>
                    <p className={styles.subtitle}>
                        The best way to learn is by doing. Pick a project template and start building your portfolio.
                    </p>
                </div>

                <div className={styles.grid}>
                    {PROJECTS.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}

                    <div className={styles.comingSoonCard}>
                        <p>More templates coming soon...</p>
                    </div>
                </div>

            </div>
        </Layout>
    );
};

const ProjectCard: React.FC<{ project: typeof PROJECTS[0] }> = ({ project }) => {
    const getDifficultyClass = (diff: string) => {
        switch (diff) {
            case 'Beginner': return styles.difficultyBeginner;
            case 'Intermediate': return styles.difficultyIntermediate;
            case 'Advanced': return styles.difficultyAdvanced;
            default: return styles.difficultyBeginner;
        }
    }

    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <span className={`${styles.difficultyBadge} ${getDifficultyClass(project.difficulty)}`}>
                    {project.difficulty}
                </span>
                <div className={styles.timeEstimate}>
                    <Clock size={16} />
                    <span>{project.estimatedGenericTime}</span>
                </div>
            </div>

            <h2 className={styles.cardTitle}>{project.title}</h2>
            <p className={styles.cardDescription}>{project.description}</p>

            <div className={styles.metaSection}>
                <div className={styles.toolsRow}>
                    <div className={styles.toolLabel}>
                        <Wrench size={16} />
                        <span>Tools:</span>
                    </div>
                    {project.toolsRequired.map(toolId => (
                        // In a real app we'd lookup the tool name, using ID as placeholder or passed name
                        <span key={toolId} className={styles.toolTag}>{toolId}</span>
                    ))}
                </div>

                <div className={styles.milestonesContainer}>
                    <div className={styles.milestonesHeader}>
                        <BarChart2 size={16} />
                        <span>Milestones</span>
                    </div>
                    {project.steps.map((step, idx) => (
                        <div key={idx} className={styles.stepItem}>
                            <span className={styles.stepNumber}>{idx + 1}.</span>
                            <span>{step}</span>
                        </div>
                    ))}
                </div>

                <button className={styles.ctaButton}>
                    Start Project <ArrowRight size={18} />
                </button>
            </div>
        </div>
    );
};

export default Projects;
