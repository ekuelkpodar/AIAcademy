import type { Concept } from '../types';

export const CONCEPTS_DATA: Concept[] = [
    // Foundations
    {
        id: "f1",
        title: "What is AI, ML, and Deep Learning?",
        category: "Foundations",
        difficulty: "Beginner",
        summary: "AI is teaching computers to make decisions. ML is learning from examples. Deep Learning uses brain-inspired networks.",
        intuition: "AI is teaching computers to make decisions. ML is learning from examples. Deep Learning uses brain-inspired networks.",
        analogy: "Like teaching a child: AI is the goal, ML is learning by examples, Deep Learning is the child's neural connections growing.",
        resources: []
    },
    {
        id: "f2",
        title: "Data → Model → Loss → Optimization",
        category: "Foundations",
        difficulty: "Beginner",
        summary: "You feed data to a model, measure how wrong it is (loss), and adjust it to do better (optimization).",
        intuition: "You feed data to a model, measure how wrong it is (loss), and adjust it to do better (optimization).",
        analogy: "Like practicing basketball: you shoot (model), see if you miss (loss), and adjust your aim (optimization).",
        resources: []
    },
    {
        id: "f3",
        title: "Supervised vs Unsupervised Learning",
        category: "Foundations",
        difficulty: "Beginner",
        summary: "Supervised: learning with answer keys. Unsupervised: finding patterns without being told what to look for.",
        intuition: "Supervised: learning with answer keys. Unsupervised: finding patterns without being told what to look for.",
        analogy: "Supervised is like flashcards with answers. Unsupervised is like sorting your closet by color without instructions.",
        resources: []
    },
    {
        id: "f4",
        title: "Overfitting & Generalization",
        category: "Foundations",
        difficulty: "Intermediate",
        summary: "Overfitting is memorizing training examples instead of learning patterns. Good models generalize to new data.",
        intuition: "Overfitting is memorizing training examples instead of learning patterns. Good models generalize to new data.",
        analogy: "Memorizing every practice test vs understanding the subject—only understanding helps with new questions.",
        resources: []
    },

    // Core Models
    {
        id: "c1",
        title: "Linear & Logistic Regression",
        category: "Core ML", // Mapped from "Core Models"
        difficulty: "Beginner",
        summary: "Linear regression finds the best straight line through data. Logistic regression predicts yes/no answers.",
        intuition: "Linear regression finds the best straight line through data. Logistic regression predicts yes/no answers.",
        analogy: "Linear: drawing a trend line on a graph. Logistic: deciding if an email is spam based on patterns.",
        resources: []
    },
    {
        id: "c2",
        title: "Neural Networks & Backpropagation",
        category: "Core ML",
        difficulty: "Intermediate",
        summary: "Neural networks are layers of simple units that learn patterns. Backpropagation adjusts each unit based on errors.",
        intuition: "Neural networks are layers of simple units that learn patterns. Backpropagation adjusts each unit based on errors.",
        analogy: "Like a team where everyone learns from mistakes: error flows backward so each person improves their role.",
        resources: []
    },
    {
        id: "c3",
        title: "CNNs - Pattern Detectors for Images",
        category: "Core ML",
        difficulty: "Intermediate",
        summary: "CNNs detect edges, shapes, and objects in images by scanning with small filters, building up from simple to complex.",
        intuition: "CNNs detect edges, shapes, and objects in images by scanning with small filters, building up from simple to complex.",
        analogy: "Like recognizing a face: first spotting edges, then shapes like eyes, then the whole face.",
        resources: []
    },
    {
        id: "c4",
        title: "Transformers & Attention",
        category: "Core ML",
        difficulty: "Advanced",
        summary: "Transformers look at all words in context simultaneously, focusing attention on relevant parts for understanding.",
        intuition: "Transformers look at all words in context simultaneously, focusing attention on relevant parts for understanding.",
        analogy: "Reading a sentence and instantly knowing which words matter most for the meaning—not just reading left to right.",
        resources: []
    },

    // Modern GenAI
    {
        id: "g1",
        title: "Prompt Engineering",
        category: "GenAI",
        difficulty: "Beginner",
        summary: "Crafting instructions to AI models to get useful, accurate responses. Clear prompts = better outputs.",
        intuition: "Crafting instructions to AI models to get useful, accurate responses. Clear prompts = better outputs.",
        analogy: "Like asking a smart friend for help: specific questions get better answers than vague ones.",
        resources: []
    },
    {
        id: "g2",
        title: "Retrieval-Augmented Generation (RAG)",
        category: "GenAI",
        difficulty: "Intermediate",
        summary: "Combining AI with a knowledge base: the model retrieves relevant info before generating an answer.",
        intuition: "Combining AI with a knowledge base: the model retrieves relevant info before generating an answer.",
        analogy: "Like having ChatGPT look up facts in your company docs before answering, instead of guessing.",
        resources: []
    },
    {
        id: "g3",
        title: "Fine-tuning & LoRA",
        category: "GenAI",
        difficulty: "Advanced",
        summary: "Fine-tuning adjusts an entire model on new data. LoRA updates only small parts efficiently for customization.",
        intuition: "Fine-tuning adjusts an entire model on new data. LoRA updates only small parts efficiently for customization.",
        analogy: "Fine-tuning is renovating a whole house. LoRA is redecorating just one room to match your style.",
        resources: []
    },
    {
        id: "g4",
        title: "AI Agents & Tool Calling",
        category: "GenAI",
        difficulty: "Advanced",
        summary: "AI agents can use tools (search, code, APIs) to solve tasks beyond conversation, acting autonomously.",
        intuition: "AI agents can use tools (search, code, APIs) to solve tasks beyond conversation, acting autonomously.",
        analogy: "An assistant who can not only answer questions but also book flights, send emails, and schedule meetings.",
        resources: []
    },

    // Responsible AI
    {
        id: "r1",
        title: "Bias & Fairness",
        category: "Responsible AI",
        difficulty: "Beginner",
        summary: "Models can inherit biases from training data, leading to unfair predictions for certain groups.",
        intuition: "Models can inherit biases from training data, leading to unfair predictions for certain groups.",
        analogy: "If you only learn recipes from one culture, you won't cook diverse meals—same with AI and data diversity.",
        resources: []
    },
    {
        id: "r2",
        title: "Model Limitations & Hallucinations",
        category: "Responsible AI",
        difficulty: "Intermediate",
        summary: "AI models can confidently generate false information (hallucinations) and have knowledge cutoffs.",
        intuition: "AI models can confidently generate false information (hallucinations) and have knowledge cutoffs.",
        analogy: "A friend who sounds confident but sometimes makes up facts—always verify important claims.",
        resources: []
    }
];

export const CATEGORY_SUBTITLES: Record<string, string> = {
    "Foundations": "How AI Thinks",
    "Core ML": "Classical to Modern",
    "GenAI": "LLMs & Applications",
    "Responsible AI": "Ethics & Safety"
};
