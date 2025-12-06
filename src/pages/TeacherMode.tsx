import React, { useState } from 'react';
import Layout from '../components/Layout';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { Users, Clock, Calendar, BookOpen, Download } from 'lucide-react';

const TeacherMode: React.FC = () => {
    const [config, setConfig] = useState({
        track: '30' as '30' | '60',
        frequency: '2x' as 'daily' | '2x' | '1x',
    });
    const [isGenerated, setIsGenerated] = useState(false);

    return (
        <Layout>
            <div className="max-w-4xl mx-auto space-y-10">

                <div className="flex items-center gap-4 border-b border-border-color pb-8">
                    <div className="p-4 bg-accent-tertiary/10 rounded-2xl">
                        <Users size={32} className="text-accent-tertiary" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold font-heading">Teacher / Manager Mode</h1>
                        <p className="text-text-secondary">Generate a curriculum for your team or workshop.</p>
                    </div>
                </div>

                {/* Config Panel */}
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="space-y-6">
                        <h2 className="text-xl font-bold">1. Configure Settings</h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-text-muted mb-2">Duration</label>
                                <div className="flex gap-2">
                                    {['30', '60'].map(opt => (
                                        <button
                                            key={opt}
                                            onClick={() => setConfig({ ...config, track: opt as any })}
                                            className={`flex-1 py-2 px-4 rounded-lg border ${config.track === opt
                                                    ? 'bg-accent-primary/10 border-accent-primary text-accent-primary'
                                                    : 'border-border-color hover:bg-white/5'
                                                }`}
                                        >
                                            {opt} Days
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-text-muted mb-2">Session Frequency</label>
                                <div className="grid grid-cols-3 gap-2">
                                    {['Daily', '2x/Week', '1x/Week'].map(opt => (
                                        <button
                                            key={opt}
                                            onClick={() => setConfig({ ...config, frequency: opt as any })} // simple mock mapping
                                            className={`py-2 px-2 text-sm rounded-lg border ${config.frequency === opt
                                                    ? 'bg-accent-primary/10 border-accent-primary text-accent-primary'
                                                    : 'border-border-color hover:bg-white/5'
                                                }`}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Button className="w-full" onClick={() => setIsGenerated(true)} isLoading={false}>
                            Generate Curriculum
                        </Button>
                    </Card>

                    {/* Preview / Results */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold">2. Your Schedule</h2>
                        {isGenerated ? (
                            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
                                <Card className="bg-gradient-to-br from-bg-card to-bg-secondary border-accent-tertiary/20">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="font-bold text-lg">Workshop Overview</h3>
                                            <p className="text-sm text-text-muted">Based on your selection</p>
                                        </div>
                                        <Download size={20} className="text-text-muted hover:text-text-primary cursor-pointer" />
                                    </div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center gap-2"><Clock size={14} /> Total Hours: ~12h</div>
                                        <div className="flex items-center gap-2"><Calendar size={14} /> Sessions: 8</div>
                                        <div className="flex items-center gap-2"><BookOpen size={14} /> Projects: 1</div>
                                    </div>
                                </Card>

                                <div className="space-y-2">
                                    <div className="p-3 bg-bg-card rounded-lg border border-border-color">
                                        <span className="text-xs text-accent-secondary font-mono block mb-1">SESSION 1</span>
                                        <h4 className="font-bold">Introduction to AI & Setup</h4>
                                    </div>
                                    <div className="p-3 bg-bg-card rounded-lg border border-border-color">
                                        <span className="text-xs text-accent-secondary font-mono block mb-1">SESSION 2</span>
                                        <h4 className="font-bold">Core Concepts: ML vs DL</h4>
                                    </div>
                                    <div className="p-3 bg-bg-card rounded-lg border border-border-color opacity-50">
                                        <span className="text-xs text-text-muted font-mono block mb-1">SESSION 3+</span>
                                        <h4 className="font-bold text-text-muted">...and 6 more sessions</h4>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center text-text-muted border-2 border-dashed border-border-color rounded-xl p-8">
                                <p>Select options and click Generate</p>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </Layout>
    );
};

export default TeacherMode;
