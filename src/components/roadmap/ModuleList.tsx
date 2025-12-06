import React from 'react';
import type { DayPlan, Module } from '../../types';
import { Calendar, CheckCircle, Circle, ChevronRight, Lock } from 'lucide-react';
import styles from './ModuleList.module.css';

interface ModuleListProps {
    modules: Module[];
    onDayClick: (day: DayPlan) => void;
}

export const ModuleList: React.FC<ModuleListProps> = ({ modules, onDayClick }) => {
    return (
        <div className={styles.container}>
            {modules.map((module, index) => (
                <div key={module.id} className={styles.moduleItem}>
                    {/* Connector Line */}
                    {index !== modules.length - 1 && (
                        <div className={styles.connector} />
                    )}

                    <div className={styles.contentWrapper}>
                        {/* Number Badge */}
                        <div className={styles.badgeWrapper}>
                            <div className={styles.badge}>
                                W{index + 1}
                            </div>
                        </div>

                        {/* Content */}
                        <div className={styles.moduleContent}>
                            <h2 className={styles.moduleTitle}>{module.title}</h2>
                            <p className={styles.moduleDescription}>{module.description}</p>

                            <div className={styles.daysGrid}>
                                {module.days.map((day) => (
                                    <DayCard key={day.day} day={day} onClick={() => onDayClick(day)} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const DayCard: React.FC<{ day: DayPlan; onClick: () => void }> = ({ day, onClick }) => {
    const isCompleted = false;
    const isLocked = false;

    return (
        <div
            className={styles.dayCard}
            onClick={isLocked ? undefined : onClick}
        >
            <div className={styles.dayCardHeader}>
                <span className={styles.dayTag}>Day {day.day}</span>
                {isCompleted ? (
                    <CheckCircle size={18} className="text-accent-tertiary" />
                ) : isLocked ? (
                    <Lock size={18} className="text-text-muted" />
                ) : (
                    <Circle size={18} className={styles.statusIcon} />
                )}
            </div>

            <h3 className={styles.dayTitle}>{day.title}</h3>
            <p className={styles.daySummary}>{day.summary}</p>

            <div className={styles.dayFooter}>
                <Calendar size={14} />
                <span>{day.timeEstimate}</span>
                <span className={styles.arrowIcon}>
                    <ChevronRight size={16} />
                </span>
            </div>
        </div>
    );
};
