import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { ArrowRight, Brain, Code, Presentation, Zap, BookOpen, Users, GraduationCap, Quote, Check, Mail, ChevronDown } from 'lucide-react';
import styles from './Home.module.css';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <Layout>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroTag}>
                    <span className="w-2 h-2 rounded-full bg-accent-violet"></span>
                    AI Academy • v1.0
                </div>
                <h1 className={styles.heroTitle}>
                    Master AI from <span className="text-gradient">Zero to Builder</span>
                </h1>
                <p className={styles.heroSubtitle}>
                    A guided journey to map AI concepts to real-world business value.
                    Learn to think, build, and teach with code.
                </p>

                <div className={styles.heroStats}>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>50+</span>
                        <span className={styles.statLabel}>AI Sources</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>30+</span>
                        <span className={styles.statLabel}>Days Plan</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>100+</span>
                        <span className={styles.statLabel}>Prompts</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>10+</span>
                        <span className={styles.statLabel}>Projects</span>
                    </div>
                </div>
            </section>

            {/* Learning Paths */}
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Choose Your Learning Path</h2>
                    <p className={styles.sectionSubtitle}>Select the path that matches your current role and goals. Switch at any time.</p>
                </div>

                <div className={styles.pathGrid}>
                    <PathCard
                        icon={<Brain size={32} />}
                        title="Curious Beginner"
                        desc="I want to understand how AI works and use tools like ChatGPT at work."
                        linkText="Start Journey"
                        onClick={() => navigate('/roadmap')}
                    />
                    <PathCard
                        icon={<Code size={32} />}
                        title="Aspiring AI Builder"
                        desc="I want to learn to code and build my own AI apps and agents."
                        linkText="Start Building"
                        onClick={() => navigate('/roadmap')}
                    />
                    <PathCard
                        icon={<Presentation size={32} />}
                        title="Teacher/Facilitator"
                        desc="I need to upskill my team or run a workshop on AI."
                        linkText="Start Teaching"
                        onClick={() => navigate('/teach')}
                    />
                </div>

                <div className="flex justify-center mt-12">
                    <button className={styles.primaryButton} onClick={() => navigate('/roadmap')}>
                        Start the Journey <ArrowRight size={18} />
                    </button>
                </div>
            </section>

            {/* Curriculum Preview */}
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>What You'll Learn</h2>
                    <p className={styles.sectionSubtitle}>A structured 4-week sprint to AI competency.</p>
                </div>

                <div className={styles.curriculumGrid}>
                    <div className={styles.curriculumCard}>
                        <span className={styles.weekBadge}>Week 01</span>
                        <h3 className="text-xl font-bold mb-3">AI Foundations</h3>
                        <p className="text-sm text-text-secondary mb-4">Master the vocabulary, history, and core concepts of Machine Learning vs. Deep Learning.</p>
                        <ul className="text-sm space-y-2 text-text-muted">
                            <li className="flex items-center gap-2"><Check size={14} className="text-accent-violet" /> Neural Networks Intuition</li>
                            <li className="flex items-center gap-2"><Check size={14} className="text-accent-violet" /> Prompt Engineering Basics</li>
                            <li className="flex items-center gap-2"><Check size={14} className="text-accent-violet" /> First Chatbot Interaction</li>
                        </ul>
                    </div>
                    <div className={styles.curriculumCard}>
                        <span className={styles.weekBadge}>Week 02</span>
                        <h3 className="text-xl font-bold mb-3">GenAI & LLMs</h3>
                        <p className="text-sm text-text-secondary mb-4">Deep dive into Large Language Models, Transformers, and how to control them.</p>
                        <ul className="text-sm space-y-2 text-text-muted">
                            <li className="flex items-center gap-2"><Check size={14} className="text-accent-violet" /> How Transformers Work</li>
                            <li className="flex items-center gap-2"><Check size={14} className="text-accent-violet" /> Advanced Prompting</li>
                            <li className="flex items-center gap-2"><Check size={14} className="text-accent-violet" /> RAG Introduction</li>
                        </ul>
                    </div>
                    <div className={styles.curriculumCard}>
                        <span className={styles.weekBadge}>Week 03</span>
                        <h3 className="text-xl font-bold mb-3">Building AI Apps</h3>
                        <p className="text-sm text-text-secondary mb-4">Transition from user to builder. Create real applications using APIs.</p>
                        <ul className="text-sm space-y-2 text-text-muted">
                            <li className="flex items-center gap-2"><Check size={14} className="text-accent-violet" /> OpenAI API Basics</li>
                            <li className="flex items-center gap-2"><Check size={14} className="text-accent-violet" /> Building a PDF Chatbot</li>
                            <li className="flex items-center gap-2"><Check size={14} className="text-accent-violet" /> Deploying to Vercel</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>How It Works</h2>
                    <p className={styles.sectionSubtitle}>A systematic approach to AI mastery.</p>
                </div>

                <div className={styles.stepsGrid}>
                    <div className={styles.stepCard}>
                        <div className={styles.stepIcon}><BookOpen size={24} /></div>
                        <h3 className="font-bold mb-2">Concepts</h3>
                        <p className="text-sm text-text-secondary">Visual mental models</p>
                    </div>
                    <div className={styles.stepCard}>
                        <div className={styles.stepIcon}><Zap size={24} /></div>
                        <h3 className="font-bold mb-2">Tools</h3>
                        <p className="text-sm text-text-secondary">Hands-on practice</p>
                    </div>
                    <div className={styles.stepCard}>
                        <div className={styles.stepIcon}><Code size={24} /></div>
                        <h3 className="font-bold mb-2">Projects</h3>
                        <p className="text-sm text-text-secondary">Real-world building</p>
                    </div>
                    <div className={styles.stepCard}>
                        <div className={styles.stepIcon}><GraduationCap size={24} /></div>
                        <h3 className="font-bold mb-2">Progress</h3>
                        <p className="text-sm text-text-secondary">Track your growth</p>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>What Learners Say</h2>
                    <p className={styles.sectionSubtitle}>Join thousands of students mastering AI.</p>
                </div>

                <div className={styles.testimonialsGrid}>
                    <TestimonialCard
                        quote="I finally understand how Neural Networks work. The visual analogies are a game changer."
                        author="Sarah J."
                        role="Product Manager"
                    />
                    <TestimonialCard
                        quote="The transition from 'using ChatGPT' to 'building with API' was seamless. Highly recommend."
                        author="David K."
                        role="Software Engineer"
                    />
                    <TestimonialCard
                        quote="Perfect for my team. We used the facilitator resources to run our own internal workshop."
                        author="Elena R."
                        role="CTO, Startup"
                    />
                </div>
            </section>

            {/* FAQ */}
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
                </div>
                <div className={styles.faqContainer}>
                    <FaqItem
                        question="Do I need to know how to code?"
                        answer="For the 'Curious Beginner' track, no coding is required. For the 'AI Builder' track, basic Python knowledge is recommended, but we provide resources to learn."
                        isOpen={openFaq === 0}
                        toggle={() => setOpenFaq(openFaq === 0 ? null : 0)}
                    />
                    <FaqItem
                        question="How much time does it take per day?"
                        answer="We recommend setting aside 30-60 minutes daily. Consistency is key!"
                        isOpen={openFaq === 1}
                        toggle={() => setOpenFaq(openFaq === 1 ? null : 1)}
                    />
                    <FaqItem
                        question="Is this course free?"
                        answer="Yes! AI Academy is a completely free, open-source educational initiative."
                        isOpen={openFaq === 2}
                        toggle={() => setOpenFaq(openFaq === 2 ? null : 2)}
                    />
                </div>
            </section>

            {/* Newsletter */}
            <section className={styles.section}>
                <div className={styles.newsletterSection}>
                    <h2 className="text-3xl font-bold mb-4">Stay Ahead of the Curve</h2>
                    <p className="text-text-secondary max-w-xl mx-auto">AI is moving fast. Get weekly updates on new tools, trends, and tutorials directly to your inbox.</p>
                    <div className={styles.inputGroup}>
                        <input type="email" placeholder="Enter your email" className={styles.emailInput} />
                        <button className={styles.primaryButton}>Subscribe</button>
                    </div>
                </div>
            </section>

            {/* Why This Works */}
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Why This Learning Path Works</h2>
                    <p className={styles.sectionSubtitle}>Designed for learning efficiency and practical application.</p>
                </div>

                <div className={styles.featuresGrid}>
                    <FeatureCard
                        icon={<Brain size={24} />}
                        title="Learn the Intuition First"
                        desc="Understand the 'why' before the 'how'. We use visual analogies, not just complex math."
                    />
                    <FeatureCard
                        icon={<Zap size={24} />}
                        title="Rapid Learning Tracks"
                        desc="Curated daily lessons ensure you spend time learning, not searching for resources."
                    />
                    <FeatureCard
                        icon={<Users size={24} />}
                        title="Ready for Teams"
                        desc="Lesson plans and workshop materials included for facilitators and managers."
                    />
                    <FeatureCard
                        icon={<Code size={24} />}
                        title="Project-Based Learning"
                        desc="Don't just read. Build. Create 10+ portfolio pieces to showcase your skills."
                    />
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <h2 className={styles.sectionTitle}>Ready to Start Your AI Journey?</h2>
                <p className={styles.sectionSubtitle}>The best time to start was yesterday. The second best time is now.</p>
                <br />
                <button className={styles.primaryButton} onClick={() => navigate('/roadmap')}>
                    Start Free Today <ArrowRight size={18} />
                </button>
            </section>
        </Layout>
    );
};

const PathCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    desc: string;
    linkText: string;
    onClick: () => void;
}> = ({ icon, title, desc, linkText, onClick }) => (
    <div className={styles.pathCard} onClick={onClick}>
        <div className={styles.cardIcon}>{icon}</div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDesc}>{desc}</p>
        <div className={styles.cardLink}>
            {linkText} <ArrowRight size={16} />
        </div>
    </div>
);

const FeatureCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    desc: string;
}> = ({ icon, title, desc }) => (
    <div className={styles.featureCard}>
        <div className={styles.featureIcon}>{icon}</div>
        <div>
            <h3 className="font-bold mb-2">{title}</h3>
            <p className="text-sm text-text-secondary">{desc}</p>
        </div>
    </div>
);

const TestimonialCard: React.FC<{ quote: string; author: string; role: string }> = ({ quote, author, role }) => (
    <div className={styles.testimonialCard}>
        <Quote className={styles.quoteIcon} size={24} />
        <p className={styles.testimonialText}>"{quote}"</p>
        <div className={styles.testimonialAuthor}>
            <div className={styles.authorAvatar} />
            <div>
                <div className="font-bold text-sm">{author}</div>
                <div className="text-xs text-text-muted">{role}</div>
            </div>
        </div>
    </div>
);

const FaqItem: React.FC<{ question: string; answer: string; isOpen: boolean; toggle: () => void }> = ({ question, answer, isOpen, toggle }) => (
    <div className={styles.faqItem} onClick={toggle}>
        <div className={styles.faqQuestion}>
            {question}
            <ChevronDown size={20} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>
        {isOpen && <p className="mt-4 text-text-secondary text-sm leading-relaxed">{answer}</p>}
    </div>
);

export default Home;
