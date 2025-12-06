export interface LibraryResource {
    id: string;
    type: 'Video' | 'Course' | 'Article';
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    title: string;
    author: string;
    platform: string;
    description: string;
    rating: number;
    reviewCount: string;
    duration: string;
    prerequisites?: string[];
    topics: string[];
    url: string;
}

export const LIBRARY_RESOURCES: LibraryResource[] = [
    {
        id: "r1",
        type: "Video",
        difficulty: "Beginner",
        title: "Neural Networks from Scratch",
        author: "3Blue1Brown",
        platform: "YouTube",
        description: "Visual and intuitive explanation of how neural networks work from the ground up.",
        rating: 5.0,
        reviewCount: "45.9k",
        duration: "4 hours",
        topics: ["Neural Networks", "Backpropagation", "Visual Intuition"],
        url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi"
    },
    {
        id: "r2",
        type: "Course",
        difficulty: "Intermediate",
        title: "Machine Learning Specialization",
        author: "Andrew Ng",
        platform: "Coursera",
        description: "Comprehensive ML foundations covering supervised learning, neural networks, and practical tips.",
        rating: 4.9,
        reviewCount: "28.4k",
        duration: "3 months",
        prerequisites: ["Basic Python", "Linear Algebra"],
        topics: ["Supervised Learning", "Neural Networks", "ML Best Practices"],
        url: "https://www.coursera.org/specializations/machine-learning-introduction"
    },
    {
        id: "r3",
        type: "Course",
        difficulty: "Advanced",
        title: "Deep Learning Specialization",
        author: "DeepLearning.AI",
        platform: "Coursera",
        description: "Master deep learning with CNNs, RNNs, sequence models, and transformers.",
        rating: 4.9,
        reviewCount: "19.2k",
        duration: "5 months",
        prerequisites: ["Machine Learning basics", "Python", "Neural Networks"],
        topics: ["CNNs", "RNNs", "Transformers"],
        url: "https://www.coursera.org/specializations/deep-learning"
    },
    {
        id: "r4",
        type: "Article",
        difficulty: "Intermediate",
        title: "The Illustrated Transformer",
        author: "Jay Alammar",
        platform: "Blog",
        description: "Visual guide to understanding transformer architecture and attention mechanisms.",
        rating: 4.9,
        reviewCount: "32.1k",
        duration: "30 min",
        prerequisites: ["Neural Networks basics"],
        topics: ["Transformers", "Attention", "Visual Explanations"],
        url: "https://jalammar.github.io/illustrated-transformer/"
    },
    {
        id: "r5",
        type: "Course",
        difficulty: "Beginner",
        title: "AI For Everyone",
        author: "Andrew Ng",
        platform: "Coursera",
        description: "Non-technical introduction to AI concepts, applications, and societal impact.",
        rating: 4.8,
        reviewCount: "15.4k",
        duration: "4 weeks",
        topics: ["AI Basics", "Business Applications"],
        url: "https://www.coursera.org/learn/ai-for-everyone"
    },
    {
        id: "r6",
        type: "Course",
        difficulty: "Intermediate",
        title: "Practical Deep Learning for Coders",
        author: "fast.ai",
        platform: "fast.ai",
        description: "Top-down approach to deep learning with immediate practical applications.",
        rating: 4.8,
        reviewCount: "12.6k",
        duration: "7 weeks",
        prerequisites: ["Python", "Basic ML"],
        topics: ["PyTorch", "Computer Vision", "NLP"],
        url: "https://course.fast.ai/"
    },
    {
        id: "r7",
        type: "Video",
        difficulty: "Intermediate",
        title: "Introduction to Deep Learning",
        author: "MIT",
        platform: "MIT OpenCourseWare",
        description: "Modern deep learning course covering fundamentals through LLMs and GenAI applications.",
        rating: 4.7,
        reviewCount: "8.9k",
        duration: "Self-paced",
        prerequisites: ["Linear Algebra", "Calculus", "Python"],
        topics: ["Deep Learning", "LLMs", "Computer Vision"],
        url: "http://introtodeeplearning.com/"
    },
    {
        id: "r8",
        type: "Course",
        difficulty: "Intermediate",
        title: "Hugging Face NLP Course",
        author: "Hugging Face",
        platform: "Hugging Face",
        description: "Learn to use transformers for NLP tasks with the Hugging Face ecosystem.",
        rating: 4.7,
        reviewCount: "6.8k",
        duration: "Self-paced",
        prerequisites: ["Python", "PyTorch basics"],
        topics: ["Transformers", "NLP", "Fine-tuning"],
        url: "https://huggingface.co/learn/nlp-course"
    },
    {
        id: "r9",
        type: "Article",
        difficulty: "Beginner",
        title: "Prompt Engineering Guide",
        author: "OpenAI",
        platform: "Documentation",
        description: "Best practices and strategies for effective prompt engineering with LLMs.",
        rating: 4.7,
        reviewCount: "21.4k",
        duration: "1 hour",
        topics: ["Prompt Engineering", "LLMs", "Best Practices"],
        url: "https://platform.openai.com/docs/guides/prompt-engineering"
    },
    {
        id: "r10",
        type: "Course",
        difficulty: "Beginner",
        title: "Kaggle Learn",
        author: "Kaggle",
        platform: "Kaggle",
        description: "Micro-courses on Python, ML, deep learning, and data science with hands-on notebooks.",
        rating: 4.6,
        reviewCount: "18.9k",
        duration: "Self-paced",
        topics: ["Python", "ML", "Data Science"],
        url: "https://www.kaggle.com/learn"
    }
];
