export interface Tool {
    id: string;
    name: string;
    category: 'AI Chat & Agents' | 'Automation & Workflows' | 'Business & Productivity' | 'Design & Creativity' | 'Data & Analytics';
    description: string;
    url: string;
    cost: 'Free' | 'Freemium' | 'Paid' | 'Enterprise';
    featured?: boolean;
}

export const TOP_TOOLS: Tool[] = [
    // AI Chat & Agents
    { id: "t1", name: "ChatGPT", category: "AI Chat & Agents", description: "The industry-standard conversational AI by OpenAI.", url: "https://chat.openai.com", cost: "Freemium", featured: true },
    { id: "t2", name: "Claude", category: "AI Chat & Agents", description: "Anthropic's helpful and harmless AI assistant.", url: "https://claude.ai", cost: "Freemium", featured: true },
    { id: "t3", name: "Gemini", category: "AI Chat & Agents", description: "Google's multimodal AI model built for reasoning.", url: "https://gemini.google.com", cost: "Freemium" },
    { id: "t4", name: "Perplexity AI", category: "AI Chat & Agents", description: "AI-powered search engine for accurate answers.", url: "https://perplexity.ai", cost: "Freemium", featured: true },
    { id: "t5", name: "Poe", category: "AI Chat & Agents", description: "Quora's platform to access multiple AI models.", url: "https://poe.com", cost: "Freemium" },
    { id: "t6", name: "You.com", category: "AI Chat & Agents", description: "Private search engine with AI chat capabilities.", url: "https://you.com", cost: "Freemium" },
    { id: "t7", name: "Pi (Inflection AI)", category: "AI Chat & Agents", description: "Emotionally intelligent personal AI.", url: "https://pi.ai", cost: "Free" },
    { id: "t8", name: "Microsoft Copilot", category: "AI Chat & Agents", description: "AI integrated into Microsoft 365 and web search.", url: "https://copilot.microsoft.com", cost: "Freemium" },
    { id: "t9", name: "Replit Ghostwriter", category: "AI Chat & Agents", description: "AI coding partner integrated into the Replit IDE.", url: "https://replit.com", cost: "Paid" },
    { id: "t10", name: "Mistral Le Chat", category: "AI Chat & Agents", description: "Open-weight models from Mistral AI.", url: "https://chat.mistral.ai", cost: "Free" },

    // Automation & Workflows
    { id: "t11", name: "LangFlow", category: "Automation & Workflows", description: "UI for building LangChain flow applications.", url: "https://langflow.org", cost: "Free" },
    { id: "t12", name: "AirOps", category: "Automation & Workflows", description: "Build AI apps and workflows for your business.", url: "https://airops.com", cost: "Paid" },
    { id: "t13", name: "Flowise AI", category: "Automation & Workflows", description: "Drag & drop UI to build your customized LLM flow.", url: "https://flowiseai.com", cost: "Free" },
    { id: "t14", name: "AgentGPT", category: "Automation & Workflows", description: "Deploy autonomous AI agents in your browser.", url: "https://agentgpt.reworkd.ai", cost: "Freemium", featured: true },
    { id: "t15", name: "Tability", category: "Automation & Workflows", description: "AI-powered goal tracking and OKRs.", url: "https://tability.io", cost: "Paid" },
    { id: "t16", name: "Taskade AI", category: "Automation & Workflows", description: "Productivity platform with AI agents for tasks.", url: "https://taskade.com", cost: "Freemium" },
    { id: "t17", name: "Bardeen AI", category: "Automation & Workflows", description: "Browser automation workflow builder.", url: "https://bardeen.ai", cost: "Freemium" },
    { id: "t18", name: "n8n", category: "Automation & Workflows", description: "Workflow automation for technical people.", url: "https://n8n.io", cost: "Freemium" },
    { id: "t19", name: "Zapier", category: "Automation & Workflows", description: "The leader in easy automation integrations.", url: "https://zapier.com", cost: "Freemium", featured: true },
    { id: "t20", name: "Make.com", category: "Automation & Workflows", description: "Visual platform for complex automations.", url: "https://make.com", cost: "Freemium" },

    // Business & Productivity
    { id: "t21", name: "Jasper", category: "Business & Productivity", description: "AI content creator for marketing teams.", url: "https://jasper.ai", cost: "Paid" },
    { id: "t22", name: "Otter.ai", category: "Business & Productivity", description: "AI meeting assistant and note taker.", url: "https://otter.ai", cost: "Freemium" },
    { id: "t23", name: "ClickUp Brain", category: "Business & Productivity", description: "AI knowledge manager for your workspace.", url: "https://clickup.com/ai", cost: "Paid" },
    { id: "t24", name: "Copy.ai", category: "Business & Productivity", description: "Generative AI for marketing copy.", url: "https://copy.ai", cost: "Freemium" },
    { id: "t25", name: "Fireflies.ai", category: "Business & Productivity", description: "Automate meeting notes and transcription.", url: "https://fireflies.ai", cost: "Freemium" },
    { id: "t26", name: "Motion AI", category: "Business & Productivity", description: "AI that plans your day automatically.", url: "https://usemotion.com", cost: "Paid" },
    { id: "t27", name: "Notion AI", category: "Business & Productivity", description: "Access AI directly inside your notes and docs.", url: "https://notion.so", cost: "Paid", featured: true },
    { id: "t28", name: "Writesonic", category: "Business & Productivity", description: "SEO-optimized content generation.", url: "https://writesonic.com", cost: "Freemium" },
    { id: "t29", name: "Fathom AI", category: "Business & Productivity", description: "Free AI meeting recorder for Zoom/Teams.", url: "https://fathom.video", cost: "Free" },
    { id: "t30", name: "Mem AI", category: "Business & Productivity", description: "Self-organizing workspace powered by AI.", url: "https://mem.ai", cost: "Freemium" },

    // Design & Creativity
    { id: "t31", name: "D-ID", category: "Design & Creativity", description: "Create realistic AI avatar videos from text.", url: "https://d-id.com", cost: "Freemium" },
    { id: "t32", name: "Leonardo AI", category: "Design & Creativity", description: "Generate production-quality game assets.", url: "https://leonardo.ai", cost: "Freemium", featured: true },
    { id: "t33", name: "Adobe Firefly", category: "Design & Creativity", description: "Generative AI for creators, safe for commercial use.", url: "https://firefly.adobe.com", cost: "Freemium" },
    { id: "t34", name: "Canva Magic Studio", category: "Design & Creativity", description: "AI design tools suite for everyone.", url: "https://canva.com", cost: "Freemium" },
    { id: "t35", name: "Synthesia", category: "Design & Creativity", description: "#1 AI Video Generation Platform.", url: "https://synthesia.io", cost: "Paid" },
    { id: "t36", name: "Runway ML", category: "Design & Creativity", description: "Advanced video editing and generation.", url: "https://runwayml.com", cost: "Freemium" },
    { id: "t37", name: "Midjourney", category: "Design & Creativity", description: "High-quality artistic image generation.", url: "https://midjourney.com", cost: "Paid", featured: true },
    { id: "t38", name: "Kaiber", category: "Design & Creativity", description: "Animated video generation with AI.", url: "https://kaiber.ai", cost: "Freemium" },
    { id: "t39", name: "Pika Labs", category: "Design & Creativity", description: "Idea-to-video platform.", url: "https://pika.art", cost: "Freemium" },
    { id: "t40", name: "OpusClip", category: "Design & Creativity", description: "Repurpose long video into shorts instantly.", url: "https://opus.pro", cost: "Freemium" },

    // Data & Analytics
    { id: "t41", name: "Chatbase", category: "Data & Analytics", description: "Custom GPT chatbot trained on your data.", url: "https://chatbase.co", cost: "Paid" },
    { id: "t42", name: "Dataiku", category: "Data & Analytics", description: "Everyday AI platform for data teams.", url: "https://dataiku.com", cost: "Paid" },
    { id: "t43", name: "Tableau GPT", category: "Data & Analytics", description: "AI-driven analytics and data visualization.", url: "https://tableau.com", cost: "Paid" },
    { id: "t44", name: "Power BI Copilot", category: "Data & Analytics", description: "Generative AI for your reports.", url: "https://powerbi.microsoft.com", cost: "Paid" },
    { id: "t45", name: "Browse AI", category: "Data & Analytics", description: "Train a robot to extract data from any website.", url: "https://browse.ai", cost: "Freemium" },
    { id: "t46", name: "PromptLayer", category: "Data & Analytics", description: "Platform for prompt engineering and tracking.", url: "https://promptlayer.com", cost: "Freemium" },
    { id: "t47", name: "Telmai", category: "Data & Analytics", description: "AI-driven data observability.", url: "https://telmai.com", cost: "Paid" },
    { id: "t48", name: "Akkio", category: "Data & Analytics", description: "Generative BI for agencies.", url: "https://akkio.com", cost: "Paid" },
    { id: "t49", name: "Obviously.ai", category: "Data & Analytics", description: "No-code tool for data predictions.", url: "https://obviously.ai", cost: "Paid" },
    { id: "t50", name: "MonkeyLearn", category: "Data & Analytics", description: "No-code text analytics.", url: "https://monkeylearn.com", cost: "Paid" }
];
