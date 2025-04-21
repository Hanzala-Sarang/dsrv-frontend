import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import FeedbackForm from '@/components/FeedbackForm'; // Import the redesigned component
import { cn } from '@/lib/utils';

const Contact = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-28 pb-16 bg-[#01B3A9] relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div
                        className={cn(
                            "max-w-3xl mx-auto text-center opacity-0 translate-y-8 transition-all duration-1000",
                            loaded && "opacity-100 translate-y-0"
                        )}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Let's Connect</h1>
                        <p className="text-xl text-white mb-8">
                            Have questions or want to share your thoughts? We'd love to hear from you!
                        </p>
                    </div>
                </div>

                {/* Wave background */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-wave-pattern opacity-10"></div>
            </section>

            {/* Main Content Area */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Contact Form */}
                        <div
                            className={cn(
                                "opacity-0 translate-y-8 transition-all duration-1000 delay-300",
                                loaded && "opacity-100 translate-y-0"
                            )}
                        >
                            <ContactForm />
                        </div>
                        {/* Feedback Form */}
                        <div
                            className={cn(
                                "opacity-0 translate-y-8 transition-all duration-1000 delay-700",
                                loaded && "opacity-100 translate-y-0"
                            )}
                        >
                            <FeedbackForm />
                        </div>
                        {/* Contact Info */}
                        <div
                            className={cn(
                                "opacity-0 translate-y-8 transition-all duration-1000 delay-500",
                                loaded && "opacity-100 translate-y-0"
                            )}
                        >
                            <div className="bg-[#01B3A9] rounded-lg p-6 shadow-md h-full">
                                <h3 className="text-xl font-semibold mb-4 text-white">Contact Information</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 text-white">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold mb-1 text-white">Our Address</h4>
                                            <p className="text-white/90 text-sm">
                                                DSRV & Co.<br />
                                                PO & PS Dankuni coal complex<br />
                                                Village-kharial<br />
                                                PIN-712310
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 text-white">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold mb-1 text-white">Email</h4>
                                            <p className="text-white/90 text-sm">
                                                <a href="mailto:sales.dsrv.in" className="text-white hover:underline">
                                                    sales.dsrv.in
                                                </a>
                                            </p>
                                            <p className="text-white/80 mt-1 text-xs">
                                                We'll respond within 24 hours.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 text-white">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold mb-1 text-white">Business Hours</h4>
                                            <div className="space-y-1 text-white/90 text-sm">
                                                <p>Monday - Saturday</p>
                                                <p>Sunday: Closed</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 pt-6 border-t border-white/30">
                                    <h4 className="text-lg font-semibold mb-3 text-white">Follow Us</h4>
                                    <div className="flex space-x-3">
                                        {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                                            <a
                                                key={social}
                                                href="#"
                                                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#01B3A9] hover:bg-white/90 transition-colors text-sm"
                                            >
                                                <span className="sr-only">{social}</span>
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    {social === 'facebook' && <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5L14.21.5C10.57.5,9.82,3.44,9.82,5.32v2.15H7v4h2.82V22h4.68V11.46h3.1l.42-4Z" />}
                                                    {social === 'twitter' && <path d="M23.32,6.44a9.63,9.63,0,0,1-2.6.71,4.49,4.49,0,0,0,2-2.49h0a1,1,0,0,0-1.46-1.15,9.72,9.72,0,0,1-3.36,1.29A4.56,4.56,0,0,0,11.31,9a4.2,4.2,0,0,0,.11,1h0A13.69,13.69,0,0,1,1.47,3.9a1,1,0,0,0-1.63,1,4.51,4.51,0,0,0,.92,2.78A1,1,0,0,0,.47,9.16,4.51,4.51,0,0,0,2,11.73a1,1,0,0,0,.7,1.81,4.46,4.46,0,0,0,1.38,1,4.56,4.56,0,0,1-2.9.06,1,1,0,0,0-1.14,1.48,9.75,9.75,0,0,0,15-5.5,12.88,12.88,0,0,0,2.62-5.27h0A1,1,0,0,0,23.32,6.44Z" />}
                                                    {social === 'instagram' && <path d="M12,9.52A2.48,2.48,0,1,0,14.48,12,2.48,2.48,0,0,0,12,9.52Zm9.93-2.45a6.53,6.53,0,0,0-.42-2.26,4,4,0,0,0-2.32-2.32,6.53,6.53,0,0,0-2.26-.42C15.64,2,15.26,2,12,2s-3.64,0-4.93.07a6.53,6.53,0,0,0-2.26.42A4,4,0,0,0,2.49,4.81a6.53,6.53,0,0,0-.42,2.26C2,8.36,2,8.74,2,12s0,3.64.07,4.93a6.86,6.86,0,0,0,.42,2.27,3.94,3.94,0,0,0,.91,1.4,3.89,3.89,0,0,0,1.41.91,6.53,6.53,0,0,0,2.26.42C8.36,22,8.74,22,12,22s3.64,0,4.93-.07a6.53,6.53,0,0,0,2.26-.42,3.89,3.89,0,0,0,1.41-.91,3.94,3.94,0,0,0,.91-1.4,6.6,6.6,0,0,0,.42-2.27C22,15.64,22,15.26,22,12s0-3.64-.07-4.93Zm-2.54,8a5.73,5.73,0,0,1-.39,1.8A3.86,3.86,0,0,1,16.87,19a5.73,5.73,0,0,1-1.81.35H8.92A5.73,5.73,0,0,1,7.13,19a3.51,3.51,0,0,1-1.31-.86A3.51,3.51,0,0,1,5,16.87a5.49,5.49,0,0,1-.34-1.81V8.92A5.49,5.49,0,0,1,5,7.13a3.51,3.51,0,0,1,.86-1.31A3.59,3.59,0,0,1,7.13,5a5.73,5.73,0,0,1,1.81-.35h6.13A5.73,5.73,0,0,1,16.87,5a3.51,3.51,0,0,1,1.31.86A3.51,3.51,0,0,1,19,7.13a5.73,5.73,0,0,1,.35,1.81V12C19.39,14,19.39,14.05,19.39,15.07Z" />}
                                                    {social === 'linkedin' && <path d="M22.23,0H1.77A1.77,1.77,0,0,0,0,1.77V22.23A1.77,1.77,0,0,0,1.77,24H22.23A1.77,1.77,0,0,0,24,22.23V1.77A1.77,1.77,0,0,0,22.23,0ZM7.27,20.1H3.64V8.59H7.27Zm-1.82-13A2.05,2.05,0,1,1,7.5,5.05,2.05,2.05,0,0,1,5.45,7.1Zm14.65,13H16.46V14.17c0-1.35,0-3.09-1.88-3.09s-2.17,1.47-2.17,3V20.1H8.77V8.59h3.45v1.59h.05a3.8,3.8,0,0,1,3.42-1.88c3.67,0,4.34,2.41,4.34,5.55v6.25Z" />}
                                                </svg>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;