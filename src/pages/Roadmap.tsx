import React, { useState } from 'react';
import Layout from '../components/Layout';
import Button from '../components/common/Button';
import { ModuleList } from '../components/roadmap/ModuleList';
import { ROADMAP_30_DAY, ROADMAP_60_DAY } from '../data/roadmapData';
import { useRoadmapProgress } from '../hooks/useRoadmapProgress';
import type { DayPlan } from '../types';
import { X, ExternalLink, PlayCircle, CheckSquare, Square, Trophy } from 'lucide-react';
import styles from './Roadmap.module.css';

const Roadmap: React.FC = () => {
    const [track, setTrack] = useState<'30' | '60'>('30');
    const [selectedDay, setSelectedDay] = useState<DayPlan | null>(null);

    const {
        progress,
        toggleDayCompletion,
        toggleTaskCompletion,
        isDayCompleted,
        isTaskCompleted
    } = useRoadmapProgress(track);

    const currentData = track === '30' ? ROADMAP_30_DAY : ROADMAP_60_DAY;

    return (
        <Layout>
            <div className={styles.container}>

                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.titleSection}>
                        <h1 className={styles.title}>Your AI Journey</h1>
                        <p className={styles.subtitle}>Structured daily plans to guide your learning from beginner to builder.</p>
                    </div>

                    {/* Toggle */}
                    <div className={styles.controls}>
                        <div className={styles.toggleGroup}>
                            <button
                                onClick={() => setTrack('30')}
                                className={`${styles.toggleButton} ${track === '30' ? styles.toggleButtonActive : ''}`}
                            >
                                30-Day Track
                            </button>
                            <button
                                onClick={() => setTrack('60')}
                                className={`${styles.toggleButton} ${track === '60' ? styles.toggleButtonActive : ''}`}
                            >
                                60-Day Track
                            </button>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <ModuleList
                    modules={currentData}
                    onDayClick={setSelectedDay}
                    completedDays={progress.completedDays}
                />
            </div>

            {/* Day Detail Sidebar / Modal */}
            {selectedDay && (
                <DayDetailPanel
                    day={selectedDay}
                    onClose={() => setSelectedDay(null)}
                    isCompleted={isDayCompleted(selectedDay.day)}
                    onToggleComplete={() => toggleDayCompletion(selectedDay.day)}
                    isTaskCompleted={(idx) => isTaskCompleted(selectedDay.day, idx)}
                    onToggleTask={(idx) => toggleTaskCompletion(selectedDay.day, idx)}
                />
            )}
        </Layout>
    );
};

// Sub-component for the detail panel
interface DayDetailProps {
    day: DayPlan;
    onClose: () => void;
    isCompleted: boolean;
    onToggleComplete: () => void;
    isTaskCompleted: (index: number) => boolean;
    onToggleTask: (index: number) => void;
}

const DayDetailPanel: React.FC<DayDetailProps> = ({
    day,
    onClose,
    isCompleted,
    onToggleComplete,
    isTaskCompleted,
    onToggleTask
}) => {
    return (
        <div className={styles.modalBackdrop} onClick={onClose}>
            <div className={styles.modalPanel} onClick={e => e.stopPropagation()}>
                <div className={styles.panelContent}>
                    {/* Header */}
                    <div className={styles.panelHeader}>
                        <div>
                            <span className={styles.dayLabel}>DAY {day.day}</span>
                            <h2 className={styles.panelTitle}>{day.title}</h2>
                        </div>
                        <button onClick={onClose} className={styles.closeButton}>
                            <X size={24} />
                        </button>
                    </div>

                    {/* Time & Summary */}
                    <div className={styles.metaBar}>
                        <span className="font-semibold text-white">{day.timeEstimate}</span> estimate
                    </div>
                    <p className={styles.subtitle} style={{ marginBottom: '2rem' }}>
                        {day.summary}
                    </p>

                    <hr className="border-white/10 my-6" />

                    {/* Objectives / Tasks */}
                    <div>
                        <h3 className={styles.sectionTitle}>Today's Mission</h3>
                        <div className={styles.taskList}>
                            {day.tasks.map((task, i) => (
                                <div
                                    key={i}
                                    className={`${styles.taskItem} cursor-pointer hover:bg-white/5 transition-colors p-2 rounded flex items-start gap-3`}
                                    onClick={() => onToggleTask(i)}
                                >
                                    <div className={`mt-1 ${isTaskCompleted(i) ? 'text-accent-tertiary' : 'text-text-muted'}`}>
                                        {isTaskCompleted(i) ? <CheckSquare size={20} /> : <Square size={20} />}
                                    </div>
                                    <span className={`text-sm leading-relaxed ${isTaskCompleted(i) ? 'line-through text-text-muted' : 'text-text-primary'}`}>
                                        {task}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Concepts */}
                    <div className="mt-8">
                        <h3 className={styles.sectionTitle}>Key Concepts</h3>
                        <div className={styles.conceptList}>
                            {day.concepts.map(cId => (
                                <div key={cId} className={styles.conceptItem}>
                                    <BrainIcon size={18} />
                                    <span className="font-medium">{cId}</span>
                                    <ExternalLink size={14} className="ml-auto opacity-50" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Resources */}
                    <div className="mt-8">
                        <h3 className={styles.sectionTitle}>Resources</h3>
                        <div className={styles.conceptList}>
                            {day.resources.map(rId => (
                                <div key={rId} className={styles.conceptItem} style={{ cursor: 'pointer', background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.1)' }}>
                                    <PlayCircle size={16} className="text-accent-pink" />
                                    <span className="font-medium">Resource {rId}</span>
                                    <ExternalLink size={14} className="ml-auto opacity-50" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pt-8 mb-8">
                        <Button
                            className={`w-full transition-all duration-300 ${isCompleted ? 'bg-accent-tertiary/20 border-accent-tertiary text-accent-tertiary hover:bg-accent-tertiary/30' : ''}`}
                            onClick={onToggleComplete}
                        >
                            {isCompleted ? (
                                <span className="flex items-center gap-2 justify-center"><Trophy size={18} /> Day Complete!</span>
                            ) : (
                                "Mark Day Complete"
                            )}
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    );
};

const BrainIcon: React.FC<{ size?: number, className?: string }> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" /><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" /><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" /><path d="M17.599 6.5a3 3 0 0 0 .399-1.375" /><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" /><path d="M3.477 10.896a4 4 0 0 1 .585-.396" /><path d="M19.938 10.5a4 4 0 0 1 .585.396" /><path d="M6 18a4 4 0 0 1-1.97-3.465" /><path d="M20 14.535A4 4 0 0 1 18 18" /></svg>
)

export default Roadmap;
