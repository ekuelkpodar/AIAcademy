import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { contents } from '../lib/api';
import { CATEGORY_SUBTITLES } from '../data/conceptsData';
import { Lightbulb, Network, BrainCircuit, Cpu, Layers, ShieldCheck } from 'lucide-react';
import styles from './ConceptMap.module.css';

const ConceptMap: React.FC = () => {
    // Group concepts by category, preserving the order defined in CONCEPTS_DATA implicitly or by explicit list
    // We want a specific order: Foundations, Core ML, GenAI, Responsible AI
    const orderedCategories = ["Foundations", "Core ML", "GenAI", "Responsible AI"];
    const [concepts, setConcepts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        contents.getConcepts()
            .then(data => setConcepts(data))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <Layout>
                <div className="flex items-center justify-center min-h-screen">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent-violet"></div>
                </div>
            </Layout>
        )
    }

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
                        <CategorySection key={category} category={category} allConcepts={concepts} />
                    ))}
                </div>

            </div>
        </Layout>
    );
};

const CategorySection: React.FC<{ category: string; allConcepts: any[] }> = ({ category, allConcepts }) => {
    const categoryConcepts = allConcepts.filter(c => c.category === category);

    // If no concepts in this category, don't show the section
    if (categoryConcepts.length === 0) return null;

    const subtitle = CATEGORY_SUBTITLES[category] || "";

    const getIcon = (cat: string) => {
        switch (cat) {
            case 'Foundations': return <Lightbulb size={28} />;
            case 'Deep Learning': return <Layers size={28} />;
            case 'GenAI': return <BrainCircuit size={28} />;
            case 'Core ML': return <Cpu size={28} />;
            case 'Responsible AI': return <ShieldCheck size={28} />;
            default: return <Network size={28} />;
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
                    <p className="text-base text-text-secondary opacity-80">{subtitle}</p>
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

                        <div className="mb-5">
                            <p className={styles.summary}>{concept.intuition}</p>
                        </div>

                        {concept.analogy && (
                            <div className={styles.intuitionBox}>
                                <p className={styles.intuitionText}>
                                    <span className={styles.intuitionLabel}>Analogy:</span>
                                    {concept.analogy}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ConceptMap;
