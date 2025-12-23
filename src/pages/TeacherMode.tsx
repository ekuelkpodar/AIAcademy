import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Button from '../components/common/Button';
import { Users, Clock, Calendar, BookOpen, Download, FileText, Presentation, Layout as LayoutIcon, ChevronRight, Play, CheckCircle, AlertCircle, BarChart2 } from 'lucide-react';
import { WORKSHOPS, TEACHER_RESOURCES, MOCK_COHORTS } from '../data/teacherData';
import type { Workshop } from '../data/teacherData';
import styles from './TeacherMode.module.css';

type Tab = 'builder' | 'workshops' | 'resources' | 'cohorts' | 'live';

const TeacherMode: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('workshops');

    return (
        <Layout>
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.iconBox}>
                        <Users size={32} />
                    </div>
                    <div>
                        <h1 className={styles.title}>Teacher & Facilitator Hub</h1>
                        <p className={styles.subtitle}>Everything you need to lead AI workshops and plan curriculums.</p>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className={styles.tabs}>
                    <button
                        className={`${styles.tab} ${activeTab === 'workshops' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('workshops')}
                    >
                        Workshop Guides
                    </button>
                    <button
                        className={`${styles.tab} ${activeTab === 'builder' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('builder')}
                    >
                        Curriculum Builder
                    </button>
                    <button
                        className={`${styles.tab} ${activeTab === 'cohorts' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('cohorts')}
                    >
                        Cohort Manager
                    </button>
                    <button
                        className={`${styles.tab} ${activeTab === 'live' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('live')}
                    >
                        Live Session
                    </button>
                    <button
                        className={`${styles.tab} ${activeTab === 'resources' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('resources')}
                    >
                        Resource Library
                    </button>
                </div>

                {/* Content Area */}
                <div>
                    {activeTab === 'workshops' && <WorkshopsTab />}
                    {activeTab === 'builder' && <CurriculumBuilder />}
                    {activeTab === 'resources' && <ResourcesTab />}
                    {activeTab === 'cohorts' && <CohortManager />}
                    {activeTab === 'live' && <LiveSession />}
                </div>
            </div>
        </Layout>
    );
};

/* --- TAB COMPONENTS --- */

const WorkshopsTab: React.FC = () => (
    <div className={styles.grid}>
        {WORKSHOPS.map(workshop => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
        ))}
    </div>
);

const WorkshopCard: React.FC<{ workshop: Workshop }> = ({ workshop }) => (
    <div className={styles.card}>
        <div className={styles.cardHeader}>
            <div>
                <span className={`${styles.badge} bg-accent-tertiary/10 text-accent-tertiary border border-accent-tertiary/20 mb-2 inline-block`}>
                    {workshop.level}
                </span>
                <h3 className={styles.cardTitle}>{workshop.title}</h3>
                <div className="flex items-center gap-2 text-text-muted text-sm mt-1">
                    <Clock size={14} /> {workshop.duration}
                </div>
            </div>
        </div>

        <p className="text-text-secondary leading-relaxed mb-6">
            {workshop.description}
        </p>

        <div className={styles.agenda}>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-text-muted">Agenda</h4>
            {workshop.agenda.map((item, idx) => (
                <div key={idx} className={styles.agendaItem}>
                    <div className={styles.time}>{item.time}</div>
                    <div>
                        <div className="font-semibold text-text-primary">{item.topic}</div>
                        <div className="text-sm text-text-muted">{item.details}</div>
                    </div>
                </div>
            ))}
        </div>

        <Button className="w-full mt-6" variant="secondary">
            <Download size={18} className="mr-2" /> Download Facilitator Guide
        </Button>
    </div>
);

const CurriculumBuilder: React.FC = () => {
    const [config, setConfig] = useState({ track: '30', frequency: '2x' });
    const [isGenerated, setIsGenerated] = useState(false);

    return (
        <div className="grid md:grid-cols-2 gap-8">
            <div className={styles.builderSection}>
                <h2 className="text-xl font-bold mb-6">Configure Your Cohort</h2>

                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-text-muted mb-3">Program Duration</label>
                        <div className="grid grid-cols-2 gap-3">
                            {['30 Days', '60 Days'].map(opt => (
                                <button
                                    key={opt}
                                    onClick={() => setConfig({ ...config, track: opt.startsWith('30') ? '30' : '60' })}
                                    className={`py-3 px-4 rounded-lg border font-medium transition-all ${config.track === (opt.startsWith('30') ? '30' : '60')
                                        ? 'bg-accent-tertiary/10 border-accent-tertiary text-accent-tertiary'
                                        : 'bg-bg-secondary border-transparent hover:bg-white/5'
                                        }`}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-text-muted mb-3">Live Session Frequency</label>
                        <div className="grid grid-cols-3 gap-3">
                            {['1x / Week', '2x / Week', 'Daily'].map(opt => (
                                <button
                                    key={opt}
                                    onClick={() => setConfig({ ...config, frequency: opt })}
                                    className={`py-3 px-2 text-sm rounded-lg border font-medium transition-all ${config.frequency === opt
                                        ? 'bg-accent-tertiary/10 border-accent-tertiary text-accent-tertiary'
                                        : 'bg-bg-secondary border-transparent hover:bg-white/5'
                                        }`}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>

                    <Button className="w-full mt-4" onClick={() => setIsGenerated(true)}>
                        Generate Schedule
                    </Button>
                </div>
            </div>

            <div className={styles.builderSection}>
                <h2 className="text-xl font-bold mb-6">Preview Schedule</h2>
                {isGenerated ? (
                    <div className="animate-in fade-in slide-in-from-bottom-4">
                        <div className="bg-gradient-to-br from-accent-tertiary/5 to-transparent border border-accent-tertiary/20 rounded-xl p-6 mb-6">
                            <h3 className="font-bold text-lg mb-1">Custom {config.track}-Day Plan</h3>
                            <p className="text-sm text-text-muted mb-4">{config.frequency} Syncs • Beginner Friendly</p>
                            <div className="flex gap-4 text-sm">
                                <span className="flex items-center gap-1"><Calendar size={14} /> 4 Weeks</span>
                                <span className="flex items-center gap-1"><BookOpen size={14} /> 8 Modules</span>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="p-4 bg-bg-secondary rounded-lg border border-border-subtle flex justify-between items-center group cursor-pointer hover:border-accent-tertiary/50 transition-colors">
                                <div>
                                    <span className="text-xs text-accent-tertiary font-bold uppercase">Week 1 • Session 1</span>
                                    <h4 className="font-semibold text-text-primary">Kickoff: The AI Landscape</h4>
                                </div>
                                <ChevronRight size={18} className="text-text-muted group-hover:text-accent-tertiary" />
                            </div>
                            <div className="p-4 bg-bg-secondary rounded-lg border border-border-subtle flex justify-between items-center group cursor-pointer hover:border-accent-tertiary/50 transition-colors">
                                <div>
                                    <span className="text-xs text-accent-tertiary font-bold uppercase">Week 1 • Session 2</span>
                                    <h4 className="font-semibold text-text-primary">Prompting Workshop</h4>
                                </div>
                                <ChevronRight size={18} className="text-text-muted group-hover:text-accent-tertiary" />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="h-full flex flex-col items-center justify-center text-text-muted opacity-50">
                        <LayoutIcon size={48} className="mb-4" />
                        <p>Configure options to generate a plan</p>
                    </div>
                )}
            </div>
        </div>
    );
}

const CohortManager: React.FC = () => {
    const cohort = MOCK_COHORTS[0];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        {cohort.name} <span className="text-sm font-normal text-text-muted bg-white/5 px-2 py-0.5 rounded ml-2">Active</span>
                    </h2>
                    <p className="text-text-secondary">Started on {cohort.startDate}</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="secondary" className="!py-2"><BarChart2 size={16} className="mr-2" /> Analytics</Button>
                    <Button className="!py-2">+ Add Student</Button>
                </div>
            </div>

            <div className={styles.cohortCard}>
                <div className={styles.tableHeader}>
                    <div>Student</div>
                    <div className="text-center">Status</div>
                    <div>Progress</div>
                    <div className="text-right">Last Active</div>
                </div>
                <div>
                    {cohort.students.map(student => (
                        <div key={student.id} className={styles.tableRow}>
                            <div className="flex items-center">
                                <div className={styles.avatar}>{student.avatar}</div>
                                <span className="font-medium">{student.name}</span>
                            </div>
                            <div className="text-center">
                                <span className={`inline-flex items-center gap-1 text-xs font-bold uppercase px-2 py-1 rounded-full ${student.status === 'On Track' ? 'bg-green-500/10 text-green-500' :
                                    student.status === 'Falling Behind' ? 'bg-red-500/10 text-red-500' :
                                        'bg-blue-500/10 text-blue-500'
                                    }`}>
                                    {student.status === 'On Track' && <CheckCircle size={12} />}
                                    {student.status === 'Falling Behind' && <AlertCircle size={12} />}
                                    {student.status}
                                </span>
                            </div>
                            <div className="px-4">
                                <div className="flex justify-between text-xs mb-1">
                                    <span>{student.progress}%</span>
                                    <span className="text-text-muted">Day {Math.round(student.progress * 0.3)}/30</span>
                                </div>
                                <div className={styles.progressBarBg}>
                                    <div className={styles.progressBarFill} style={{ width: `${student.progress}%` }}></div>
                                </div>
                            </div>
                            <div className="text-right text-text-secondary text-sm">
                                {student.lastActive}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const LiveSession: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval: any;
        if (isRunning && timeLeft > 0) {
            interval = setInterval(() => setTimeLeft(t => t - 1), 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning, timeLeft]);

    const formatTime = (s: number) => {
        const m = Math.floor(s / 60);
        const sec = s % 60;
        return `${m}:${sec.toString().padStart(2, '0')}`;
    }

    return (
        <div className={styles.liveContainer}>
            {/* Main Stage */}
            <div className={styles.presenterView}>
                <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Current Activity: "Prompt Battle"</h3>
                    <p className="text-text-muted max-w-md mx-auto mb-8">
                        Teams have 10 minutes to generate the best image descriptions for the given topic.
                    </p>
                    <Button onClick={() => setIsRunning(!isRunning)} size="lg">
                        {isRunning ? 'Pause Timer' : 'Start Activity'}
                    </Button>
                </div>

                <div className={styles.timerOverlay}>
                    {formatTime(timeLeft)}
                </div>
            </div>

            {/* Sidebar / Notes */}
            <div className={styles.notesPanel}>
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><FileText size={18} /> Speaker Notes</h3>
                <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
                    <p>
                        <strong className="text-text-primary block mb-1">Intro (2 mins)</strong>
                        Explain the rules. No negative prompting allowed. Must use at least 3 adjectives.
                    </p>
                    <p>
                        <strong className="text-text-primary block mb-1">During Activity</strong>
                        Walk around and check screen sharing. Look for "hallucinations" in their drafts.
                    </p>
                    <p>
                        <strong className="text-text-primary block mb-1">Debrief (5 mins)</strong>
                        Ask Team A to share their prompt first. Compare with Team B. highlight the specific words that made the difference.
                    </p>
                    <div className="p-3 bg-accent-tertiary/10 border border-accent-tertiary/20 rounded mt-4">
                        <strong className="text-accent-tertiary block mb-1">Key Insight</strong>
                        "More context isn't always better. Specificity beats length."
                    </div>
                </div>
            </div>
        </div>
    );
}

const ResourcesTab: React.FC = () => (
    <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
            {TEACHER_RESOURCES.map(resource => (
                <div key={resource.id} className={styles.resourceItem}>
                    <div className="p-3 bg-white/5 rounded-lg text-accent-tertiary">
                        {resource.type === 'Deck' && <Presentation size={24} />}
                        {resource.type === 'Guide' && <BookOpen size={24} />}
                        {resource.type === 'Worksheet' && <LayoutIcon size={24} />}
                        {resource.type === 'Cheatsheet' && <FileText size={24} />}
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start">
                            <h4 className="font-bold text-text-primary">{resource.title}</h4>
                            <span className="text-xs font-mono bg-white/10 px-2 py-0.5 rounded text-text-muted">{resource.format}</span>
                        </div>
                        <p className="text-sm text-text-secondary mt-1">{resource.description}</p>
                    </div>
                    <button className="p-2 hover:bg-white/10 rounded-full text-text-muted hover:text-white transition-colors">
                        <Download size={20} />
                    </button>
                </div>
            ))}
        </div>
    </div>
);

export default TeacherMode;
