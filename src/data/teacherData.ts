
export interface Workshop {
    id: string;
    title: string;
    duration: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    description: string;
    agenda: { time: string; topic: string; details: string }[];
}

export interface Resource {
    id: string;
    title: string;
    type: 'Deck' | 'Worksheet' | 'Guide' | 'Cheatsheet';
    description: string;
    format: 'PDF' | 'PPTX' | 'Google Doc';
    size: string;
}

export interface Student {
    id: string;
    name: string;
    avatar: string; // Initials or URL
    progress: number; // 0-100
    lastActive: string;
    status: 'On Track' | 'Falling Behind' | 'Completed';
}

export interface Cohort {
    id: string;
    name: string;
    students: Student[];
    startDate: string;
}

export const MOCK_COHORTS: Cohort[] = [
    {
        id: 'c1',
        name: 'Fall 2025 - Engineering Team',
        startDate: 'Sept 1, 2025',
        students: [
            { id: 's1', name: 'Alice Chen', avatar: 'AC', progress: 85, lastActive: '2 hours ago', status: 'On Track' },
            { id: 's2', name: 'Bob Smith', avatar: 'BS', progress: 45, lastActive: '3 days ago', status: 'Falling Behind' },
            { id: 's3', name: 'Charlie Kim', avatar: 'CK', progress: 92, lastActive: '1 day ago', status: 'On Track' },
            { id: 's4', name: 'Dana Lee', avatar: 'DL', progress: 100, lastActive: '1 week ago', status: 'Completed' },
        ]
    }
];

export const WORKSHOPS: Workshop[] = [
    {
        id: 'w1',
        title: 'AI Lunch & Learn: The Basics',
        duration: '1 Hour',
        level: 'Beginner',
        description: 'A high-energy, non-technical intro to get your team excited about AI possibilities.',
        agenda: [
            { time: '10 min', topic: 'The "Magic" Demystified', details: 'Explain LLMs as next-word predictors, not conscious minds.' },
            { time: '20 min', topic: 'Live Demos', details: 'Show ChatGPT writing emails, Midjourney creating art, and Perplexity for search.' },
            { time: '15 min', topic: 'Prompt Engineering 101', details: 'Interactive game: "Better Prompting". Teams compete to get the best output.' },
            { time: '15 min', topic: 'Q&A + Ethics', details: 'Address privacy concerns and company policy.' }
        ]
    },
    {
        id: 'w2',
        title: 'Prompt Engineering Masterclass',
        duration: 'Half Day (3h)',
        level: 'Intermediate',
        description: 'Hands-on workshop to transform your team from casual chatters to power users.',
        agenda: [
            { time: '30 min', topic: 'Prompt Anatomy', details: 'Role, Context, Constraints, and Output Format.' },
            { time: '45 min', topic: 'Chain of Thought', details: 'Teaching the AI to "show its work" for complex reasoning.' },
            { time: '15 min', topic: 'Break', details: 'Coffee & Networking.' },
            { time: '45 min', topic: 'Few-Shot Prompting', details: 'Giving examples to steer style and format.' },
            { time: '45 min', topic: 'Team Challenge', details: 'Build a custom workflow for a specific department problem.' }
        ]
    }
];

export const TEACHER_RESOURCES: Resource[] = [
    {
        id: 'r1',
        title: 'Intro to AI - Slide Deck',
        type: 'Deck',
        description: 'Professional 20-slide presentation tailored for corporate settings.',
        format: 'PPTX',
        size: '12 MB'
    },
    {
        id: 'r2',
        title: 'Prompt Engineering Cheatsheet',
        type: 'Cheatsheet',
        description: 'One-page reference guide with key techniques and examples.',
        format: 'PDF',
        size: '1.5 MB'
    },
    {
        id: 'r3',
        title: 'Facilitator Guide: "AI Ethics"',
        type: 'Guide',
        description: 'Script and discussion points for leading a session on Responsible AI.',
        format: 'Google Doc',
        size: 'Link'
    },
    {
        id: 'r4',
        title: 'Use Case Discovery Worksheet',
        type: 'Worksheet',
        description: 'Template to help teams identify high-impact AI opportunities.',
        format: 'PDF',
        size: '500 KB'
    }
];
