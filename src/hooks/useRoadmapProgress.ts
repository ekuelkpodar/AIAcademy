import { useState, useEffect } from 'react';

interface RoadmapProgress {
    completedDays: number[];
    completedTasks: Record<string, boolean>; // key: "dayId-taskIndex", e.g. "1-0"
}

export const useRoadmapProgress = (trackId: string) => {
    const [progress, setProgress] = useState<RoadmapProgress>({
        completedDays: [],
        completedTasks: {}
    });

    // Load from localStorage on mount and when track changes
    useEffect(() => {
        const saved = localStorage.getItem(`roadmap_progress_${trackId}`);
        if (saved) {
            setProgress(JSON.parse(saved));
        } else {
            // Reset if no data found for this track
            setProgress({ completedDays: [], completedTasks: {} });
        }
    }, [trackId]);

    // Save to localStorage whenever progress changes
    const saveProgress = (newProgress: RoadmapProgress) => {
        setProgress(newProgress);
        localStorage.setItem(`roadmap_progress_${trackId}`, JSON.stringify(newProgress));
    };

    const toggleDayCompletion = (day: number) => {
        const isCompleted = progress.completedDays.includes(day);
        let newCompletedDays;

        if (isCompleted) {
            newCompletedDays = progress.completedDays.filter(d => d !== day);
        } else {
            newCompletedDays = [...progress.completedDays, day];
        }

        saveProgress({
            ...progress,
            completedDays: newCompletedDays
        });
    };

    const toggleTaskCompletion = (day: number, taskIndex: number) => {
        const taskId = `${day}-${taskIndex}`;
        const newCompletedTasks = {
            ...progress.completedTasks,
            [taskId]: !progress.completedTasks[taskId]
        };

        saveProgress({
            ...progress,
            completedTasks: newCompletedTasks
        });
    };

    const isDayCompleted = (day: number) => progress.completedDays.includes(day);
    const isTaskCompleted = (day: number, taskIndex: number) => !!progress.completedTasks[`${day}-${taskIndex}`];

    return {
        progress,
        toggleDayCompletion,
        toggleTaskCompletion,
        isDayCompleted,
        isTaskCompleted
    };
};
