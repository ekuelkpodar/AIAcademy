import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Bot, Code2, Users2, ArrowRight } from 'lucide-react';
import styles from './Services.module.css';

const Services: React.FC = () => {
    const navigate = useNavigate();

    const scrollToHireUs = () => {
        // Since the form is on the home page, we need to navigate there and scroll
        // Ideally we pass a state or hash, but for now simple navigation is fine as requested.
        navigate('/');
        // Once navigated, the user can scroll to "Hire Us". 
        // Improvement: We can pass a state { scrollTo: 'hire-us' } but let's stick to the request.
        setTimeout(() => {
            document.getElementById('hire-us')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>AI Services & Consulting</h1>
                    <p className={styles.subtitle}>
                        We help ambitious companies build, deploy, and scale AI agents.
                        From strategy to shipped code, we're your partner in intelligence.
                    </p>
                </div>

                <div className={styles.grid}>
                    {/* Service 1 */}
                    <ServiceCard
                        icon={<Bot size={36} className="text-accent-violet" />}
                        title="AI Consulting & Strategy"
                        description="Navigate the AI landscape with confidence. We help you identify high-impact use cases, select the right models (Open Source vs. Frontier), and design an architecture that scales with your business."
                        features={['Feasibility Audits', 'Model Selection', 'Security & Compliance']}
                        onClick={scrollToHireUs}
                    />

                    {/* Service 2 */}
                    <ServiceCard
                        icon={<Code2 size={36} className="text-blue-400" />}
                        title="Custom AI App Development"
                        description="From MVP to Production. We build full-stack AI applications, internal tools, and autonomous agents that automate complex workflows. We specialize in RAG pipelines and agentic frameworks."
                        features={['Agentic Workflows', 'RAG Pipelines', 'Full-Stack (Next.js/Python)']}
                        onClick={scrollToHireUs}
                    />

                    {/* Service 3 */}
                    <ServiceCard
                        icon={<Users2 size={36} className="text-green-400" />}
                        title="Corporate Training & Workshops"
                        description="Upskill your team. Practical, hands-on workshops designed to get your workforce using AI tools effectively from day one. We move beyond 'prompt engineering' to real problem solving."
                        features={['1-Day Intensives', 'Executive Briefings', 'Custom Tracks']}
                        onClick={scrollToHireUs}
                    />
                </div>

                <div className={styles.bottomCta}>
                    <h2 className={styles.bottomTitle}>Ready to transform your business?</h2>
                    <button onClick={scrollToHireUs} className={styles.button}>
                        Start Your Project <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </Layout>
    );
};

const ServiceCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
    features: string[];
    onClick: () => void;
}> = ({ icon, title, description, features, onClick }) => (
    <div className={styles.card} onClick={onClick}>
        <div className={styles.cardContent}>
            <div className={styles.iconWrapper}>
                {icon}
            </div>
            <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDesc}>{description}</p>

                <div className={styles.chips}>
                    {features.map((feature, i) => (
                        <span key={i} className={styles.chip}>
                            {feature}
                        </span>
                    ))}
                </div>

                <div className={styles.ctaLink}>
                    Request Consultation <ArrowRight size={18} />
                </div>
            </div>
        </div>
    </div>
);

export default Services;
