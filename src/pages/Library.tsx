import React, { useState } from 'react';
import Layout from '../components/Layout';
import { LIBRARY_RESOURCES } from '../data/libraryData';
import { TOP_TOOLS } from '../data/toolsData';
import { Search, ExternalLink, PlayCircle, BookOpen, Video, FileText, Star, Clock, Filter, Bookmark, CheckCircle, Smartphone, Zap, Sparkles } from 'lucide-react';
import styles from './Library.module.css';

const Library: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'resources' | 'tools'>('resources');
    const [searchTerm, setSearchTerm] = useState('');
    const [difficultyFilter, setDifficultyFilter] = useState('all');
    const [typeFilter, setTypeFilter] = useState('all');

    // Filter Logic
    const filteredResources = LIBRARY_RESOURCES.filter(r => {
        const matchesSearch = r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            r.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
            r.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDifficulty = difficultyFilter === 'all' || r.difficulty.toLowerCase() === difficultyFilter.toLowerCase();
        const matchesType = typeFilter === 'all' || r.type.toLowerCase() === typeFilter.toLowerCase();

        return matchesSearch && matchesDifficulty && matchesType;
    });

    const filteredTools = TOP_TOOLS.filter(t => {
        return t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            t.description.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <Layout>
            <div className={styles.container}>

                {/* Header */}
                <div className={styles.header}>
                    <h1 className={styles.title}>Library & Tools</h1>
                    <p className={styles.subtitle}>Curated collection of the best AI learning resources and top 50 tools.</p>
                </div>

                {/* Stats Grid (Only on Resources Tab) */}
                {activeTab === 'resources' && (
                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <BookOpen size={24} className="text-blue-400 mb-2" />
                            <div className={styles.statValue}>{LIBRARY_RESOURCES.length}</div>
                            <div className={styles.statLabel}>Resources</div>
                        </div>
                        <div className={styles.statCard}>
                            <Bookmark size={24} className="text-purple-400 mb-2" />
                            <div className={styles.statValue}>0</div>
                            <div className={styles.statLabel}>Bookmarked</div>
                        </div>
                        <div className={styles.statCard}>
                            <CheckCircle size={24} className="text-green-400 mb-2" />
                            <div className={styles.statValue}>0</div>
                            <div className={styles.statLabel}>Completed</div>
                        </div>
                        <div className={styles.statCard}>
                            <Star size={24} className="text-yellow-400 mb-2" />
                            <div className={styles.statValue}>4.8</div>
                            <div className={styles.statLabel}>Avg Rating</div>
                        </div>
                    </div>
                )}

                {/* Controls Section (Search & Filter) */}
                <div className={styles.controlsSection}>
                    <div className={styles.searchBar}>
                        <Search className={styles.searchIcon} size={18} />
                        <input
                            type="text"
                            placeholder={activeTab === 'resources' ? "Search resources..." : "Search 50+ AI tools..."}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={styles.searchInput}
                        />
                    </div>

                    <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className={styles.tabGroup}>
                            <button
                                onClick={() => { setActiveTab('resources'); setSearchTerm(''); }}
                                className={`${styles.tabButton} ${activeTab === 'resources' ? styles.tabButtonActive : ''}`}
                            >
                                Learning Resources
                            </button>
                            <button
                                onClick={() => { setActiveTab('tools'); setSearchTerm(''); }}
                                className={`${styles.tabButton} ${activeTab === 'tools' ? styles.tabButtonActive : ''}`}
                            >
                                AI Tool Directory
                            </button>
                        </div>

                        {activeTab === 'resources' && (
                            <div className="flex gap-4">
                                <div className={styles.filterGroup}>
                                    <select
                                        className={styles.selectInput}
                                        value={difficultyFilter}
                                        onChange={(e) => setDifficultyFilter(e.target.value)}
                                    >
                                        <option value="all">Difficulty: All</option>
                                        <option value="beginner">Beginner</option>
                                        <option value="intermediate">Intermediate</option>
                                        <option value="advanced">Advanced</option>
                                    </select>
                                </div>
                                <div className={styles.filterGroup}>
                                    <select
                                        className={styles.selectInput}
                                        value={typeFilter}
                                        onChange={(e) => setTypeFilter(e.target.value)}
                                    >
                                        <option value="all">Type: All</option>
                                        <option value="video">Video</option>
                                        <option value="course">Course</option>
                                        <option value="article">Article</option>
                                    </select>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className={styles.resultsCount}>
                    {activeTab === 'resources'
                        ? `Showing ${filteredResources.length} of ${LIBRARY_RESOURCES.length} resources`
                        : `Showing ${filteredTools.length} of ${TOP_TOOLS.length} tools`
                    }
                </div>

                {/* Content Grid */}
                <div className={styles.grid}>
                    {activeTab === 'resources' ? (
                        filteredResources.map(resource => (
                            <ResourceCard key={resource.id} resource={resource} />
                        ))
                    ) : (
                        filteredTools.map(tool => (
                            <ToolCard key={tool.id} tool={tool} />
                        ))
                    )}
                </div>

            </div>
        </Layout>
    );
};

const ResourceCard: React.FC<{ resource: typeof LIBRARY_RESOURCES[0] }> = ({ resource }) => {
    const getIcon = (type: string) => {
        switch (type) {
            case 'Video': return <Video size={16} />;
            case 'Course': return <PlayCircle size={16} />;
            case 'Article': return <FileText size={16} />;
            default: return <BookOpen size={16} />;
        }
    }

    const getDifficultyClass = (diff: string) => {
        switch (diff.toLowerCase()) {
            case 'beginner': return styles.diffBeginner;
            case 'intermediate': return styles.diffIntermediate;
            case 'advanced': return styles.diffAdvanced;
            default: return styles.diffBeginner;
        }
    }

    return (
        <div className={styles.resourceCard}>
            <div className={styles.cardHeader}>
                <div className={styles.typeBadge}>
                    {getIcon(resource.type)}
                    <span>{resource.type}</span>
                </div>
                <span className={`${styles.difficultyBadge} ${getDifficultyClass(resource.difficulty)}`}>
                    {resource.difficulty}
                </span>
            </div>

            <h3 className={styles.cardTitle}>{resource.title}</h3>
            <p className={styles.cardAuthor}>by {resource.author} · {resource.platform}</p>

            <p className={styles.cardDescription}>{resource.description}</p>

            <div className={styles.metaRow}>
                <div className={styles.rating}>
                    <Star size={16} fill="currentColor" />
                    <span>{resource.rating}</span>
                    <span className={styles.reviewCount}>({resource.reviewCount})</span>
                </div>
                <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{resource.duration}</span>
                </div>
            </div>

            {resource.prerequisites && (
                <div className={styles.prereqs}>
                    <span className={styles.prereqLabel}>Prerequisites:</span>
                    <p className={styles.prereqText}>{resource.prerequisites.join(', ')}</p>
                </div>
            )}

            <div className={styles.tags}>
                {resource.topics.slice(0, 3).map(topic => (
                    <span key={topic} className={styles.tag}>{topic}</span>
                ))}
                {resource.topics.length > 3 && (
                    <span className={styles.tag}>+{resource.topics.length - 3} more</span>
                )}
            </div>

            <a
                href={resource.url}
                target="_blank"
                rel="noreferrer"
                className={styles.viewButton}
            >
                View Resource <ExternalLink size={16} />
            </a>
        </div>
    );
};

const ToolCard: React.FC<{ tool: typeof TOP_TOOLS[0] }> = ({ tool }) => {
    const getBadgeClass = (category: string) => {
        switch (category) {
            case 'AI Chat & Agents': return styles.badgeChat;
            case 'Automation & Workflows': return styles.badgeAutomation;
            case 'Business & Productivity': return styles.badgeBusiness;
            case 'Design & Creativity': return styles.badgeDesign;
            case 'Data & Analytics': return styles.badgeData;
            default: return styles.badgeChat;
        }
    }

    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <span className={getBadgeClass(tool.category)}>
                    {tool.category}
                </span>
                {tool.featured && <Sparkles size={16} className="text-yellow-400 fill-current" />}
            </div>

            <h3 className={styles.cardTitle}>{tool.name}</h3>
            <p className="text-sm text-text-secondary mb-4 flex-1 leading-relaxed">{tool.description}</p>

            <div className={styles.cardFooter}>
                <span className="text-xs text-text-muted font-medium bg-bg-secondary px-2 py-1 rounded border border-border-subtle">{tool.cost}</span>
                <a href={tool.url} target="_blank" rel="noreferrer" className={styles.linkIcon}>
                    Visit <ExternalLink size={14} />
                </a>
            </div>
        </div>
    );
}

export default Library;
