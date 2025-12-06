import React from 'react';
import Layout from '../components/Layout';
import { CONCEPTS_DATA, CATEGORY_SUBTITLES } from '../data/conceptsData';
import { Lightbulb, Network, BrainCircuit, Cpu, Layers, ShieldCheck } from 'lucide-react';
import styles from './ConceptMap.module.css';

const ConceptMap: React.FC = () => {
    // Group concepts by category, preserving the order defined in CONCEPTS_DATA implicitly or by explicit list
    // We want a specific order: Foundations, Core ML, GenAI, Responsible AI
    const orderedCategories = ["Foundations", "Core ML", "GenAI", "Responsible AI"];

    return (
        <Layout>
            <div className={styles.container}>

                <div className={styles.header}>
                    <h1 className={styles.title}>Understanding AI</h1>
                    <p className={styles.subtitle}>
                        Intuition-first explanations of key AI concepts. Learn the ideas, not just the jargon.
                    </p>
                </div>

                <div className={styles.grid}>
                    {orderedCategories.map(category => (
                        <CategorySection key={category} category={category} />
                    ))}
                </div>

            </div>
        </Layout>
    );
};

const CategorySection: React.FC<{ category: string }> = ({ category }) => {
    const categoryConcepts = CONCEPTS_DATA.filter(c => c.category === category);
    const subtitle = CATEGORY_SUBTITLES[category] || "";

    const getIcon = (cat: string) => {
        switch (cat) {
            case 'Foundations': return <Lightbulb size={24} />;
            case 'Deep Learning': return <Layers size={24} />;
            case 'GenAI': return <BrainCircuit size={24} />;
            case 'Core ML': return <Cpu size={24} />;
            case 'Responsible AI': return <ShieldCheck size={24} />;
            default: return <Network size={24} />;
        }
    }

    const getBadgeClass = (difficulty: string) => {
        switch (difficulty) {
            case 'Beginner': return styles.badgeBeginner;
            case 'Intermediate': return styles.badgeIntermediate;
            case 'Advanced': return styles.badgeAdvanced;
            default: return styles.badgeBeginner;
        }
    }

    return (
        <div className={styles.categorySection}>
            <div className={styles.categoryHeader}>
                <div className={styles.iconWrapper}>
                    {getIcon(category)}
                </div>
                <div>
                    <h2 className={styles.categoryTitle}>{category}</h2>
                    <p className="text-sm text-text-muted">{subtitle}</p>
                </div>
            </div>

            <div className={styles.cardsList}>
                {categoryConcepts.map(concept => (
                    <div key={concept.id} className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.cardTitle}>{concept.title}</h3>
                            <span className={`${styles.badge} ${getBadgeClass(concept.difficulty)}`}>
                                {concept.difficulty}
                            </span>
                        </div>

                        <div className="mb-4">
                            <p className="text-xs font-bold uppercase tracking-wider text-accent-primary mb-1">Intuition</p>
                            <p className={styles.summary}>{concept.intuition}</p>
                        </div>

                        <div className={styles.intuitionBox}>
                            <p className={styles.intuitionText}>
                                <span className={styles.intuitionLabel}>Analogy:</span>
                                {concept.analogy}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ConceptMap;
