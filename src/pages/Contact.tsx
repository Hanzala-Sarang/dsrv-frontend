import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import FeedbackForm from '@/components/FeedbackForm';
import { cn } from '@/lib/utils';
import WhatsAppChat from '@/components/WhatsApp';

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
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-wave-pattern opacity-10"></div>
            </section>

            {/* Main Content Area */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Contact Form */}
                        <div className={cn("opacity-0 translate-y-8 transition-all duration-1000 delay-300", loaded && "opacity-100 translate-y-0")}>
                            <ContactForm />
                        </div>

                        {/* Feedback Form */}
                        <div className={cn("opacity-0 translate-y-8 transition-all duration-1000 delay-700", loaded && "opacity-100 translate-y-0")}>
                            <FeedbackForm />
                        </div>

                        {/* Contact Info */}
                        <div className={cn("opacity-0 translate-y-8 transition-all duration-1000 delay-500", loaded && "opacity-100 translate-y-0")}>
                            <div className="bg-[#01B3A9] rounded-lg p-6 shadow-md h-full">
                                <h3 className="text-xl font-semibold mb-4 text-white">Contact Information</h3>

                                <div className="space-y-6">
                                    {/* Address Block */}
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 text-white">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                <div className="w-14 h-14 bg-white rounded-full overflow-hidden flex items-center absolute left-72 top-24 justify-center">
                                                <img src="/logo.png" alt="DSRV Logo" className="object-contain w-10 h-10" />
                                </div>
                                        <h4 className="text-lg font-semibold mb-1 text-white">Our Address (India)</h4>
                                        <div className="flex items-center space-x-2">
                                            <p className="text-white/90 text-sm mb-2">
                                                DSRV & Co.<br />
                                                PO & PS Dankuni coal complex<br />
                                                Village-kharial<br />
                                                PIN-712310 India
                                            </p>

                                        </div>
                                        {/* Indian Phone */}
                                        <div className="flex items-start text-white/90 text-sm mb-4">
                                            <svg className="w-4 h-4 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l3.6 7.59L5.25 18H19v-2H7.42a.5.5 0 01-.49-.37L6.16 13h9.31a1 1 0 00.95-.68L20.25 4H5.21" />
                                            </svg>
                                            <div>
                                                <p>+91 98367 29903</p>
                                                <p>+91 9874306372</p>
                                            </div>
                                        </div>
                                        <div className="w-12 h-12 bg-white rounded-full overflow-hidden flex items-center absolute left-72 top-72 justify-center">
                                                <img src="/intn-logo.jpg" alt="Equator Essential Logo" className="object-cover w-full h-full" />
                                            </div>
                                        <h4 className="text-sm font-semibold mb-1 text-white">International Address (Africa Ghana)</h4>
                                        <div className="flex items-center space-x-2">
                                            <p className="text-white/90 text-sm mb-2">
                                                EQUATOR ESSENTIAL ENTERPRISE LTD.<br />
                                                AQ78 NII ADJEI SANKUMA<br />
                                                ST GZ0746180<br />
                                                NR TESHIE MALIK ROUNDBOUT<br />
                                                ACCRA ACCRA <br />
                                                Ghana
                                            </p>
                                            {/* Logo for International Company */}

                                        </div>
                                            {/* Africa Phone */}
                                            <div className="flex items-start text-white/90 text-sm">
                                                <svg className="w-4 h-4 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l3.6 7.59L5.25 18H19v-2H7.42a.5.5 0 01-.49-.37L6.16 13h9.31a1 1 0 00.95-.68L20.25 4H5.21" />
                                                </svg>
                                                <p>+233593377919</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Email Block */}
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 text-white">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold mb-1 text-white">Email</h4>
                                            <p className="text-white/90 text-sm">
                                                <a href="mailto:sales@dsrv.in" className="text-white hover:underline">
                                                    sales@dsrv.in
                                                </a>
                                            </p>
                                            <p className="text-white/80 mt-1 text-xs">
                                                We'll respond within 24 hours.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Hours Block */}
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 text-white">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

                                {/* Socials */}
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
                                                    {social === 'twitter' && <path d="M23.32,6.44a9.63,9.63,0,0,1-2.6.71,4.49,4.49,0,0,0,1.95-2.47,9.6,9.6,0,0,1-3.04,1.15,4.48,4.48,0,0,0-7.62,3.06A12.7,12.7,0,0,1,1.67,4.7a4.48,4.48,0,0,0,1.39,5.97A4.47,4.47,0,0,1,2,9.6V9.7a4.48,4.48,0,0,0,3.59,4.39,4.48,4.48,0,0,1-2.03.07c.57,1.78,2.18,3.08,4.11,3.13a9.04,9.04,0,0,1-5.62,1.94A8.89,8.89,0,0,1,0,18.54a12.7,12.7,0,0,0,6.89,2.02c8.26,0,12.76-6.81,12.76-12.7l-.02-.58A9.43,9.43,0,0,0,23.32,6.44Z" />}
                                                    {social === 'instagram' && <path d="M22.02,4.64c-.24,0-.47.01-.71.04a3.53,3.53,0,0,0-3.05-2.4c-.57-.06-1.14-.17-1.68-.32-.54-.15-.88-.64-.88-1.17,0-.77,0-1.56-.02-2.34,0-.44.35-.8.8-.8,0-.45,0-.91,0-1.36A3.49,3.49,0,0,0,16.9.08a3.56,3.56,0,0,0-3.59,3.51c0,.21,0,.42,0,.63-.26,0-.52-.01-.77-.01a5.04,5.04,0,0,0-5.03,5.03,5.03,5.03,0,0,0,5.03,5.03c2.82,0,5.03-2.31,5.03-5.03a5.07,5.07,0,0,0-.01-.72c.53.35,1.08.63,1.66.87A9.61,9.61,0,0,1,22.02,4.64Z" />}
                                                    {social === 'linkedin' && <path d="M23.12,0h-22A1,1,0,0,0,0,1v22a1,1,0,0,0,1,1h22a1,1,0,0,0,1-1V1A1,1,0,0,0,23.12,0ZM7.48,20.2H4.89V9.41h2.59ZM6.18,8.15A1.6,1.6,0,1,1,7.78,6.55,1.6,1.6,0,0,1,6.18,8.15ZM20.21,20.2h-2.6V14.28c0-1.45-.52-2.44-1.82-2.44-1,.01-1.63.74-1.9,1.46-.1.25-.13.61-.13.96v6.94h-2.6V9.41h2.6V10.8h.03c.36-.69,1.13-1.63,2.34-1.63,1.7,0,3,1.14,3,4.25Z" />}
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
            <WhatsAppChat />
        </div>
    );
};

export default Contact;
