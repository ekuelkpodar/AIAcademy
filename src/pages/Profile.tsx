import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Target, TrendingUp, Award, MessageSquare } from 'lucide-react';
import styles from './Profile.module.css';

const Profile: React.FC = () => {
    const [reflection, setReflection] = useState('');

    return (
        <Layout>
            <div className={styles.container}>

                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.avatar}>ME</div>
                    <div>
                        <h1 className={styles.title}>My Progress</h1>
                        <p className={styles.subtitle}>Keep track of your journey and reflections.</p>
                    </div>
                </div>

                <div className={styles.contentGrid}>

                    {/* Main Content - Reflections */}
                    <div className="space-y-6">
                        {/* Status Cards */}
                        <div className={styles.statsRow}>
                            <div className={styles.statCard}>
                                <div className="flex justify-center mb-2">
                                    <Target className="text-emerald-400" size={24} />
                                </div>
                                <div className={styles.statValue}>Day 3</div>
                                <div className={styles.statLabel}>Current Streak</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className="flex justify-center mb-2">
                                    <TrendingUp className="text-blue-400" size={24} />
                                </div>
                                <div className={styles.statValue}>15%</div>
                                <div className={styles.statLabel}>Completion</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className="flex justify-center mb-2">
                                    <Award className="text-yellow-400" size={24} />
                                </div>
                                <div className={styles.statValue}>0</div>
                                <div className={styles.statLabel}>Certificates</div>
                            </div>
                        </div>

                        {/* Recent Reflections */}
                        <div>
                            <h2 className={styles.sectionTitle}>
                                <MessageSquare size={20} /> Reflections Log
                            </h2>

                            <div className={styles.editorCard}>
                                <textarea
                                    className={styles.textArea}
                                    placeholder="What did you learn today? What was confusing?"
                                    value={reflection}
                                    onChange={(e) => setReflection(e.target.value)}
                                />
                                <div className="flex justify-end">
                                    <button className={styles.saveButton}>Save Entry</button>
                                </div>
                            </div>

                            <div className={styles.timeline}>
                                <div className={styles.timelineItem}>
                                    <div className={styles.timelineDot} />
                                    <div className={styles.timelineDate}>Yesterday</div>
                                    <div className={styles.timelineContent}>
                                        Learned about Gradient Descent. The "walking downhill in fog" analogy really helped clarify things!
                                    </div>
                                </div>
                                <div className={styles.timelineItem}>
                                    <div className={styles.timelineDot} />
                                    <div className={styles.timelineDate}>2 Days Ago</div>
                                    <div className={styles.timelineContent}>
                                        Found setting up Python environment a bit tricky. Need to review `conda` vs `pip`.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar - Coach */}
                    <div>
                        <div className={styles.coachCard}>
                            <div className={styles.coachHeader}>
                                <div className={styles.pulseDot} />
                                <h3>Accountability Coach</h3>
                            </div>
                            <div className={styles.coachMessage}>
                                <p className="mb-4">👋 Hey! You're doing great. You've completed 2 concepts this week.</p>
                                <p><strong>Suggestion:</strong> Try the "Logistic Regression" exercise next, it fits well with what you just learned.</p>
                            </div>
                            <button className={styles.messageButton}>Message Coach</button>
                        </div>
                    </div>

                </div>

            </div>
        </Layout>
    );
};

export default Profile;
