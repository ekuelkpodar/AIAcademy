import type { Concept, Resource, Tool, Module, Project } from '../types';

export const CONCEPTS: Concept[] = [
    {
        id: "c1",
        title: "What is AI?",
        category: "Foundations",
        difficulty: "Beginner",
        summary: "Artificial Intelligence is the science of making computers think and act like humans.",
        intuition: "Think of AI as a very fast student that can read a billion books in a second.",
        analogy: "AI is like a calculator for patterns instead of just numbers.",
        resources: ["r1", "r2"]
    },
    {
        id: "c2",
        title: "Machine Learning vs. Deep Learning",
        category: "Foundations",
        difficulty: "Beginner",
        summary: "ML is the broad field; DL is a specialized subset using neural networks.",
        intuition: "ML is like teaching a dog tricks. DL is like simulating a brain to teach itself.",
        analogy: "ML is the engine; DL is the turbocharger.",
        resources: ["r3"]
    },
    {
        id: "c3",
        title: "Neural Networks",
        category: "Deep Learning",
        difficulty: "Intermediate",
        summary: "Layers of interconnected nodes that mimic the human brain to recognize patterns.",
        intuition: "Imagine a committee of voters where each layer filters the decision more finely.",
        analogy: "Like a bucket brigade passing water; each person (node) helps move the water (data) to the fire (output).",
        resources: ["r4"]
    },
    {
        id: "c4",
        title: "Large Language Models (LLMs)",
        category: "GenAI",
        difficulty: "Intermediate",
        summary: "Models trained on vast amounts of text to understand and generate human language.",
        intuition: "They are like super-advanced autocomplete tools.",
        analogy: "A parrot that has read the entire internet and understands context.",
        resources: ["r5"]
    },
    {
        id: "c5",
        title: "Prompt Engineering",
        category: "GenAI",
        difficulty: "Beginner",
        summary: "The art of crafting inputs to get the best possible output from an AI model.",
        intuition: "It's like learning how to Google efficiently, but for talking to a robot.",
        analogy: "Writing a good recipe for a chef to follow.",
        resources: ["r6"]
    }
];

export const RESOURCES: Resource[] = [
    { id: "r1", title: "AI For Everyone", type: "Course", url: "https://coursera.org", author: "Andrew Ng", duration: "4 Weeks", tags: ["Beginner", "Overview"] },
    { id: "r2", title: "Intro to AI", type: "Video", url: "https://youtube.com", author: "IBM", duration: "10 min", tags: ["Beginner"] },
    { id: "r3", title: "ML vs DL Explained", type: "Article", url: "https://medium.com", author: "Towards Data Science", duration: "5 min", tags: ["Concept"] },
    { id: "r4", title: "Visualizing Neural Networks", type: "Video", url: "https://youtube.com", author: "3Blue1Brown", duration: "20 min", tags: ["Math-light"] },
    { id: "r5", title: "How LLMs Work", type: "Article", url: "https://cohere.com", author: "Cohere", duration: "10 min", tags: ["GenAI"] },
    { id: "r6", title: "Prompt Engineering Guide", type: "Course", url: "https://learnprompting.org", author: "Learn Prompting", duration: "2 Weeks", tags: ["Practical"] }
];

export const TOOLS: Tool[] = [
    { id: "t1", name: "ChatGPT", category: "No-Code", description: "The most popular conversational AI.", url: "https://chat.openai.com", cost: "Freemium", setupGuide: "Sign up and start chatting." },
    { id: "t2", name: "Cursor", category: "Coding", description: "AI-first code editor.", url: "https://cursor.sh", cost: "Freemium", setupGuide: "Download and install." },
    { id: "t3", name: "Hugging Face", category: "MLOps", description: "The GitHub of AI models.", url: "https://huggingface.co", cost: "Free", setupGuide: "Create an account." }
];

export const PROJECTS: Project[] = [
    {
        id: "p1", title: "Personal AI Assistant", difficulty: "Beginner", description: "Customize ChatGPT instructions for your daily workflow.",
        toolsRequired: ["t1"], estimatedGenericTime: "2 hours", steps: ["Define persona", "Write system prompt", "Test with queries"]
    },
    {
        id: "p2", title: "Sentiment Analysis Tool", difficulty: "Intermediate", description: "Build a script to analyze product reviews.",
        toolsRequired: ["t2", "t3"], estimatedGenericTime: "5 hours", steps: ["Get data", "Load model", "Run inference"]
    }
];

// Mocking a simple 30-day track (just week 1 for now for brevity in seed)
export const MODULES_30_DAY: Module[] = [
    {
        id: "m1",
        title: "Week 1: Foundations",
        description: "Understanding the basics of AI and how it works.",
        days: [
            {
                day: 1, title: "Welcome to AI", summary: "The big picture.",
                concepts: ["c1"], tasks: ["Watch Intro Video", "Sign up for ChatGPT"], resources: ["r1"], timeEstimate: "1 hour"
            },
            {
                day: 2, title: "Machine Learning Basics", summary: "How machines learn.",
                concepts: ["c2"], tasks: ["Read ML vs DL article"], resources: ["r3"], timeEstimate: "45 min"
            }
        ]
    }
];
