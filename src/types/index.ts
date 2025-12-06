export type ProfilePersona = "Curious Beginner" | "Aspiring Builder" | "Manager/Teacher";
export type SkillLevel = "Beginner" | "Intermediate" | "Advanced";
export type TrackDuration = "30-Days" | "60-Days";

export interface LearnerProfile {
    name: string;
    persona: ProfilePersona;
    goal: string;
    skillLevel: SkillLevel;
    duration: TrackDuration;
    currentDay: number;
    completedModules: string[]; // Module IDs
    completedProjects: string[]; // Project IDs
}

export interface Concept {
    id: string;
    title: string;
    category: "Foundations" | "Core ML" | "Deep Learning" | "GenAI" | "Responsible AI";
    difficulty: SkillLevel;
    summary: string;
    intuition: string; // The "Explain it like I'm 5" part
    analogy: string;
    resources: string[]; // Resource IDs
}

export interface Resource {
    id: string;
    title: string;
    type: "Course" | "Article" | "Video" | "Paper";
    url: string;
    author: string;
    duration: string; // e.g., "10 min" or "4 weeks"
    tags: string[];
}

export interface Tool {
    id: string;
    name: string;
    category: "No-Code" | "Coding" | "Agent" | "MLOps";
    description: string;
    url: string;
    cost: "Free" | "Freemium" | "Paid";
    setupGuide: string;
}

export interface DayPlan {
    day: number;
    title: string;
    summary: string;
    concepts: string[]; // Concept IDs
    tasks: string[]; // Simple strings for checkbox tasks
    resources: string[]; // Resource IDs
    timeEstimate: string; // "1 hour"
}

export interface Module {
    id: string;
    title: string;
    description: string;
    days: DayPlan[]; // The days belonging to this module
}

export interface Project {
    id: string;
    title: string;
    difficulty: SkillLevel;
    description: string;
    toolsRequired: string[]; // Tool IDs
    estimatedGenericTime: string;
    steps: string[];
}

export interface Reflection {
    id: string;
    date: string;
    learned: string;
    confusedBy: string;
    nextGoal: string;
}
