import type { Concept } from '../types';

export const CONCEPTS_DATA: Concept[] = [
    // Foundations (How AI Thinks)
    {
        id: "f1",
        title: "Artificial Intelligence (AI)",
        category: "Foundations",
        difficulty: "Beginner",
        summary: "The broad discipline of creating computer systems capable of performing tasks that typically require human intelligence, such as reasoning, learning, and problem-solving.",
        intuition: "Conventional software follows a strict recipe. AI is like a chef who understands the principles of flavor and can create new dishes without specific instructions.",
        analogy: "Traditional Software: A calculator (input -> fixed formula -> output). AI: A student (input -> learns patterns -> predicts output).",
        resources: []
    },
    {
        id: "f2",
        title: "Machine Learning (ML)",
        category: "Foundations",
        difficulty: "Beginner",
        summary: "A subset of AI focused on developing algorithms that enable computers to learn from and make predictions or decisions based on data without being explicitly programmed.",
        intuition: "Instead of programming the rules ('if it creates a web, it's a spider'), you show the machine thousands of pictures of spiders, and it figures out the rules itself.",
        analogy: "Teaching a child to recognize dogs by pointing to various dogs in the park, rather than describing a dog's physical characteristics.",
        resources: []
    },
    {
        id: "f3",
        title: "Deep Learning (DL)",
        category: "Foundations",
        difficulty: "Intermediate",
        summary: "A specialized branch of ML inspired by the structure of the human brain, using multi-layered neural networks to learn from vast amounts of unstructured data.",
        intuition: "It's 'Deep' because it uses many layers of analysis. The first layer might see edges; the next, shapes; the next, eyes; and finally, a face.",
        analogy: "Like a bucket brigade: each person (layer) processes the water (data) slightly before passing it on, resulting in a complex transformation by the end.",
        resources: []
    },
    {
        id: "f4",
        title: "Training vs. Inference",
        category: "Foundations",
        difficulty: "Beginner",
        summary: "Training is the computational process of teaching a model using a dataset. Inference is the application of that trained model to make predictions on new, unseen data.",
        intuition: "Training is studying for the exam (slow, hard work). Inference is taking the exam (fast, searching memory).",
        analogy: "Training: Spending months writing a book. Inference: Someone reading that book in a few hours.",
        resources: []
    },
    {
        id: "f5",
        title: "Loss Function & Optimization",
        category: "Foundations",
        difficulty: "Intermediate",
        summary: "The Loss Function quantifies how far a model's prediction is from the actual target. Optimization algorithms (e.g., Gradient Descent) adjust the model to minimize this error.",
        intuition: "The model takes a guess. The Loss Function says 'You missed by 5 feet'. The Optimizer says 'Turn slightly left to get closer next time'.",
        analogy: "Playing 'Hot or Cold'. The Loss Function tells you if you're freezing or burning. Your movement towards the 'Hot' area is optimization.",
        resources: []
    },

    // Core ML (Classical to Modern)
    {
        id: "c1",
        title: "Supervised Learning",
        category: "Core ML",
        difficulty: "Beginner",
        summary: "A learning paradigm where the model is trained on a labeled dataset, learning to map inputs to correct outputs based on provided examples.",
        intuition: "Learning with an answer key. You make a prediction, check the answer, and correct your understanding.",
        analogy: "Flashcards: You see the front (input), guess, and flip to see the back (label) to verify.",
        resources: []
    },
    {
        id: "c2",
        title: "Unsupervised Learning",
        category: "Core ML",
        difficulty: "Intermediate",
        summary: "A learning paradigm where the model identifies patterns, structures, or relationships in data without any pre-existing labels or correct answers.",
        intuition: "The model is given a pile of mixed photos and asked to 'group the similar ones', without being told what they are.",
        analogy: "A librarian receiving a box of new, unknown books and organizing them onto shelves by genre just by reading their summaries.",
        resources: []
    },
    {
        id: "c5",
        title: "Reinforcement Learning",
        category: "Core ML",
        difficulty: "Advanced",
        summary: "A type of ML where an agent learns to make a sequence of decisions by performing actions in an environment and receiving feedback in the form of rewards or penalties.",
        intuition: "Learning by trial and error to maximize a score. The system explores strategies to see what yields the highest long-term reward.",
        analogy: "Training a dog. You don't tell it exactly how to sit; you give a treat (reward) when it does, and ignore it (no reward) when it doesn't.",
        resources: []
    },
    {
        id: "c3",
        title: "Neural Networks",
        category: "Core ML",
        difficulty: "Intermediate",
        summary: "Computational models composed of interconnected nodes (neurons) that process information in layers, mimicking the biological structure of the brain.",
        intuition: "A vast network of switches. Each switch (neuron) decides whether to pass a signal forward based on the strength of the input.",
        analogy: "A corporate hierarchy: Junior staff process raw data and pass summaries to managers, who pass insights to executives for the final decision.",
        resources: []
    },
    {
        id: "c4",
        title: "Transformer Architecture",
        category: "Core ML",
        difficulty: "Advanced",
        summary: "A revolutionary deep learning architecture that uses 'attention mechanisms' to weigh the input data's significance, enabling parallel processing and handling long-range dependencies.",
        intuition: "Instead of reading word-by-word (left to right), a Transformer looks at the whole sentence at once and understands relationships between distant words.",
        analogy: "Reading a complex sentence and instantly knowing that 'bank' refers to a river, not money, because you saw the word 'water' earlier in the text.",
        resources: []
    },

    // GenAI (LLMs & Applications)
    {
        id: "g1",
        title: "Large Language Models (LLMs)",
        category: "GenAI",
        difficulty: "Intermediate",
        summary: "Advanced AI models trained on massive text datasets to understand, generate, and manipulate human language with remarkable fluency and coherence.",
        intuition: "They are essentially 'autofill on steroids'. They predict the most statistically likely next word, but based on a massive conceptual understanding of the world.",
        analogy: "A parrot that has read every book in existence and can perfectly mimic human conversation patterns, though it doesn't 'know' facts in the human sense.",
        resources: []
    },
    {
        id: "g6",
        title: "Prompt Engineering",
        category: "GenAI",
        difficulty: "Beginner",
        summary: "The practice of designing and refining inputs (prompts) to guide Generative AI models to produce the most accurate, relevant, and high-quality outputs.",
        intuition: "It's about knowing how to ask the right question to get the best answer. The model can do it, but only if you ask correctly.",
        analogy: "Googling effectively using specific keywords and operators versus just typing a vague sentence.",
        resources: []
    },
    {
        id: "g2",
        title: "Tokens",
        category: "GenAI",
        difficulty: "Beginner",
        summary: "The fundamental units of data that LLMs process. A token can represent a word, part of a word, or a single character, depending on the tokenizer.",
        intuition: "LLMs don't see words; they see numbers representing chunks of text. 'Hamburger' might be 3 tokens.",
        analogy: "Musical notes. A song (sentence) is made up of individual notes (tokens) that combine to form meaning.",
        resources: []
    },
    {
        id: "g3",
        title: "Context Window",
        category: "GenAI",
        difficulty: "Intermediate",
        summary: "The maximum amount of text (measured in tokens) that an LLM can retain in its 'working memory' while generating a response.",
        intuition: "The AI's 'short-term memory'. If you talk past the context window, it 'forgets' the beginning of the conversation.",
        analogy: "A whiteboard. You can only write so much before you have to erase the top to add more at the bottom.",
        resources: []
    },
    {
        id: "g4",
        title: "Retrieval-Augmented Generation (RAG)",
        category: "GenAI",
        difficulty: "Advanced",
        summary: "A framework that enhances LLM capabilities by retrieving relevant facts from an external knowledge base to ground the model's generation in accurate, up-to-date information.",
        intuition: "Giving the AI an open-book test. Instead of relying on memory (training data), it looks up the specific answer in a provided textbook.",
        analogy: "A lawyer (the LLM) referencing a specific case file (retrieved data) to answer a client's question, rather than just reciting law school memory.",
        resources: []
    },
    {
        id: "g5",
        title: "AI Agents",
        category: "GenAI",
        difficulty: "Advanced",
        summary: "Autonomous systems powered by LLMs that can perceive their environment, reason, plan, and execute actions to achieve complex goals.",
        intuition: "Moving from 'Chat' to 'Act'. Instead of just telling you how to book a flight, an agent actually books it for you.",
        analogy: "A personal executive assistant. You say 'Plan a trip to Tokyo', and they handle the flights, hotels, and itinerary without constant supervision.",
        resources: []
    },

    // Responsible AI (Ethics & Safety)
    {
        id: "r1",
        title: "Bias and Fairness",
        category: "Responsible AI",
        difficulty: "Intermediate",
        summary: "The concern that AI systems may reflect or amplify existing societal prejudices found in training data, leading to discriminatory or unfair outcomes.",
        intuition: "If you teach a robot using only history books from the 1800s, it will learn 1800s worldviews. Data is a mirror.",
        analogy: "A parrot repeating naughty words it heard from its previous owner. It doesn't mean to be rude; it's just repeating what it was taught.",
        resources: []
    },
    {
        id: "r2",
        title: "Hallucinations",
        category: "Responsible AI",
        difficulty: "Beginner",
        summary: "A phenomenon where an LLM generates factually incorrect, nonsensical, or unfaithful information with high confidence.",
        intuition: "The AI is a 'smooth talker'. It cares more about sounding coherent and grammatical than being factually correct.",
        analogy: "A student on a test who doesn't know the answer but writes a very convincing, long-winded paragraph hoping for partial credit.",
        resources: []
    },
    {
        id: "r3",
        title: "Alignment",
        category: "Responsible AI",
        difficulty: "Advanced",
        summary: "The field responsible for ensuring that AI systems' goals, behaviors, and values are consistent with human intent and safety standards.",
        intuition: "Making sure the Genie grants your wish in the way you actually meant it, not in a literal, destructive way.",
        analogy: "Programming a self-driving car not just to 'get to the destination fast' (which might mean speeding), but to 'drive safely like a human'.",
        resources: []
    },
    {
        id: "r4",
        title: "Explainability (XAI)",
        category: "Responsible AI",
        difficulty: "Intermediate",
        summary: "A set of processes and methods that allows human users to comprehend and trust the results and output created by machine learning algorithms.",
        intuition: "Opening the 'black box' to see why the AI made a specific decision, rather than just accepting the output blindly.",
        analogy: "Asking a doctor to explain *why* they diagnosed you with the flu, rather than just accepting the prescription.",
        resources: []
    }
];

export const CATEGORY_SUBTITLES: Record<string, string> = {
    "Foundations": "How AI Thinks",
    "Core ML": "Classical to Modern",
    "GenAI": "LLMs & Applications",
    "Responsible AI": "Ethics & Safety"
};
