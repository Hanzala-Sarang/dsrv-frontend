import React, { useState } from 'react';

interface FeedbackFormProps {}

const FeedbackForm: React.FC<FeedbackFormProps> = () => {
    const [feedback, setFeedback] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        setError('');

        if (!feedback) {
            setError('Please enter your feedback.');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/feedback`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, feedback }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message);
                setFeedback('');
                setName('');
                setEmail('');
            } else {
                setError(data.error || 'Failed to submit feedback.');
            }
        } catch (err: any) {
            console.error('Error submitting feedback:', err);
            setError('An unexpected error occurred.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-5">Share Your Feedback</h3>
            <p className="text-gray-600 mb-6">We appreciate you taking the time to share your thoughts.</p>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="shadow-sm focus:ring-[#01B3A9] focus:border-[#01B3A9] block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="shadow-sm focus:ring-[#01B3A9] focus:border-[#01B3A9] block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email"
                    />
                </div>
                <div>
                    <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Feedback
                    </label>
                    <textarea
                        id="feedback"
                        rows={4}
                        className="shadow-sm focus:ring-[#01B3A9] focus:border-[#01B3A9] block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        required
                        placeholder="Please enter your feedback here..."
                    />
                </div>
                <div className="flex justify-end items-center">
                    <button
                        className={`inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-white bg-[#01B3A9] shadow-sm hover:bg-[#018078] focus:outline-none focus:ring-2 focus:ring-[#01B3A9] focus:ring-opacity-50 text-sm ${
                            loading ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Submitting...
                            </>
                        ) : (
                            'Submit Feedback'
                        )}
                    </button>
                    {message && <p className="ml-4 text-green-500 text-sm">{message}</p>}
                    {error && <p className="ml-4 text-red-500 text-sm">{error}</p>}
                </div>
            </form>
        </div>
    );
};

export default FeedbackForm;