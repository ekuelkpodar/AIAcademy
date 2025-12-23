import React, { useState } from 'react';
import { Check, ArrowRight, Loader2 } from 'lucide-react';
import styles from './HireUsForm.module.css';

const HireUsForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        serviceType: 'Consulting',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate minimum loading time for better UX
        const minLoadTime = new Promise(resolve => setTimeout(resolve, 800));

        try {
            // Import api dynamically to avoid circular deps if any
            const api = await import('../lib/api');
            await Promise.all([
                api.consulting.createInquiry(formData),
                minLoadTime
            ]);

            setStatus('success');
            setFormData({ name: '', email: '', company: '', serviceType: 'Consulting', message: '' });
        } catch (e) {
            console.error(e);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className={styles.formContainer}>
                <div className={styles.successContainer}>
                    <div className={styles.successIcon}>
                        <Check size={40} strokeWidth={3} />
                    </div>
                    <h3 className={styles.title}>Request Received!</h3>
                    <p className={styles.subtitle}>
                        We'll analyze your request and get back to you within 24 hours to schedule a discovery call.
                    </p>
                    <button
                        className={styles.submitButton}
                        onClick={() => setStatus('idle')}
                        style={{ maxWidth: '200px', margin: '0 auto' }}
                    >
                        Send another
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
                <div className={styles.grid}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Name</label>
                        <input
                            type="text"
                            required
                            placeholder="John Doe"
                            className={styles.input}
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Email</label>
                        <input
                            type="email"
                            required
                            placeholder="john@company.com"
                            className={styles.input}
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                </div>

                <div className={styles.grid}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Company (Optional)</label>
                        <input
                            type="text"
                            placeholder="Acme Inc."
                            className={styles.input}
                            value={formData.company}
                            onChange={e => setFormData({ ...formData, company: e.target.value })}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Service Type</label>
                        <select
                            className={styles.select}
                            value={formData.serviceType}
                            onChange={e => setFormData({ ...formData, serviceType: e.target.value })}
                        >
                            <option value="Consulting">AI Strategy Consulting</option>
                            <option value="App Development">Custom App Development</option>
                            <option value="Training">Corporate Training</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>

                <div className={styles.inputGroup} style={{ marginBottom: '1.5rem' }}>
                    <label className={styles.label}>How can we help?</label>
                    <textarea
                        required
                        rows={4}
                        placeholder="Tell us about your project goals..."
                        className={styles.textarea}
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className={styles.submitButton}
                >
                    {status === 'submitting' ? (
                        <span className="flex items-center justify-center gap-2">
                            <Loader2 size={20} className="animate-spin" /> Sending...
                        </span>
                    ) : (
                        <span className="flex items-center justify-center gap-2">
                            Send Request <ArrowRight size={20} />
                        </span>
                    )}
                </button>

                {status === 'error' && (
                    <div className={styles.errorMessage}>
                        Something went wrong. Please try again or email us directly at hello@appliedinsights.ai
                    </div>
                )}
            </form>
        </div>
    );
};

export default HireUsForm;
