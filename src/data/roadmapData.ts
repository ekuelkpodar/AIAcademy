import type { Module } from '../types';

export const ROADMAP_30_DAY: Module[] = [
    {
        id: "w1",
        title: "Week 1: Everyday AI & Basics",
        description: "Understanding AI and using AI tools",
        days: [
            {
                day: 1,
                title: "Understand what AI, ML, and DL mean",
                summary: "Explore everyday AI applications and the fundamental differences between AI, Machine Learning, and Deep Learning.",
                timeEstimate: "45 min",
                concepts: ["AI vs ML vs DL", "Everyday AI"],
                tasks: ["Read: What is AI?", "Try ChatGPT or similar tool for 3 different tasks"],
                resources: ["r_ai_intro"]
            },
            {
                day: 2,
                title: "Learn basic AI terminology",
                summary: "Understand data, models, and training. Get comfortable with the vocabulary.",
                timeEstimate: "60 min",
                concepts: ["Data & Models", "Training"],
                tasks: ["Watch: AI concepts overview", "Practice: Write 5 different prompts"],
                resources: ["r_ai_terms"]
            },
            {
                day: 3,
                title: "Explore prompt engineering basics",
                summary: "Learn how to talk to AI models effectively to get the best results.",
                timeEstimate: "45 min",
                concepts: ["Prompt Engineering", "Context"],
                tasks: ["Tutorial: Effective prompting", "Exercise: Improve 3 weak prompts"],
                resources: ["r_prompting"]
            },
            {
                day: 4,
                title: "Understand supervised vs unsupervised learning",
                summary: "Dive into the two main types of machine learning paradigms.",
                timeEstimate: "45 min",
                concepts: ["Supervised Learning", "Unsupervised Learning"],
                tasks: ["Read: Learning paradigms", "Quiz: Identify learning types"],
                resources: ["r_paradigms"]
            },
            {
                day: 5,
                title: "Reflection and mini-project planning",
                summary: "Consolidate your learning from the first week and plan how to apply it.",
                timeEstimate: "30 min",
                concepts: ["Reflection"],
                tasks: ["Write reflection on Week 1", "Plan: How can AI help in your work?"],
                resources: []
            }
        ]
    },
    {
        id: "w2",
        title: "Week 2: Classical ML Hands-On",
        description: "Data, features, and first ML model",
        days: [
            {
                day: 6,
                title: "Set up Python + Jupyter/Colab",
                summary: "Prepare your environment for machine learning development.",
                timeEstimate: "60 min",
                concepts: ["Python Environment", "Jupyter/Colab"],
                tasks: ["Tutorial: Colab setup", "Load Iris dataset, explore with pandas"],
                resources: ["r_colab"]
            },
            {
                day: 7,
                title: "Understand features and labels",
                summary: "Learn how data is structured for machine learning: inputs (features) and outputs (labels).",
                timeEstimate: "45 min",
                concepts: ["Features", "Labels", "Train/Test Split"],
                tasks: ["Read: Features vs labels", "Practice: Split Iris dataset"],
                resources: ["r_features"]
            },
            {
                day: 8,
                title: "Train a simple classifier",
                summary: "Build your first machine learning model using Logistic Regression.",
                timeEstimate: "60 min",
                concepts: ["Logistic Regression", "Classification"],
                tasks: ["Tutorial: sklearn basics", "Train and evaluate on Iris"],
                resources: ["r_sklearn"]
            },
            {
                day: 9,
                title: "Understand overfitting and evaluation metrics",
                summary: "Learn how to measure if your model is actually good.",
                timeEstimate: "45 min",
                concepts: ["Overfitting", "Accuracy", "Precision/Recall"],
                tasks: ["Read: Accuracy, precision, recall", "Experiment with train size"],
                resources: ["r_metrics"]
            },
            {
                day: 10,
                title: "Reflection and Week 2 wrap-up",
                summary: "Review your first ML models and experiments.",
                timeEstimate: "45 min",
                concepts: ["ML Workflow"],
                tasks: ["Reflect on ML process", "Try another dataset (Titanic?)"],
                resources: ["r_titanic"]
            }
        ]
    },
    {
        id: "w3",
        title: "Week 3: Neural Networks & LLMs",
        description: "Deep learning basics and modern AI",
        days: [
            {
                day: 11,
                title: "Understand neural network basics",
                summary: "Learn about layers, neurons, and activation functions.",
                timeEstimate: "60 min",
                concepts: ["Neurons", "Layers", "Activation"],
                tasks: ["Watch: Neural networks intro", "Visualize: Playground.tensorflow.org"],
                resources: ["r_nn_intro"]
            },
            {
                day: 12,
                title: "Build a simple neural net",
                summary: "Create a neural network using a framework like PyTorch or Keras.",
                timeEstimate: "75 min",
                concepts: ["PyTorch/Keras", "MNIST"],
                tasks: ["Tutorial: First neural network", "Train on MNIST digits"],
                resources: ["r_mnist"]
            },
            {
                day: 13,
                title: "Understand embeddings and transformers",
                summary: "High-level understanding of the technology behind modern AI.",
                timeEstimate: "60 min",
                concepts: ["Embeddings", "Transformers"],
                tasks: ["Read: What are embeddings?", "Explore Hugging Face models"],
                resources: ["r_embeddings"]
            },
            {
                day: 14,
                title: "Intro to LLMs and prompt patterns",
                summary: "Deep dive into Large Language Models and advanced prompting.",
                timeEstimate: "60 min",
                concepts: ["LLMs", "APIs"],
                tasks: ["Tutorial: LLM APIs", "Try different prompt strategies"],
                resources: ["r_llm_api"]
            },
            {
                day: 15,
                title: "Week 3 reflection and planning final project",
                summary: "Reflect on Deep Learning and prepare for the final sprint.",
                timeEstimate: "45 min",
                concepts: ["Project Ideation"],
                tasks: ["Reflect on neural nets & LLMs", "Brainstorm project ideas"],
                resources: []
            }
        ]
    },
    {
        id: "w4",
        title: "Week 4: Final Project & Presentation",
        description: "Apply learning to a real project",
        days: [
            {
                day: 16,
                title: "Choose and execute a mini-project",
                summary: "Pick a project like a chatbot or classifier and build it.",
                timeEstimate: "3-4 hours total",
                concepts: ["Project Building", "End-to-End ML"],
                tasks: ["Project options: FAQ chatbot, sentiment analyzer, or image classifier", "Build, test, and iterate", "Prepare 10-min presentation"],
                resources: ["r_projects"]
            },
            {
                day: 21,
                title: "Present your project",
                summary: "Share your work and reflect on the journey.",
                timeEstimate: "60 min",
                concepts: ["Presentation", "Future Steps"],
                tasks: ["Share findings and demo", "Write final reflection", "Plan next steps"],
                resources: []
            }
        ]
    }
];
