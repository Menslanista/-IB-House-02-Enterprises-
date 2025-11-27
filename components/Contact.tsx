import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, AlertCircle, CheckCircle, Loader2 } from 'lucide-react';

interface ContactProps {
  whatsappLink: string;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const Contact: React.FC<ContactProps> = ({ whatsappLink }) => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!form.name.trim()) {
      newErrors.name = 'Full name is required';
      isValid = false;
    }
    
    // Strict Email Regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!form.email.trim()) {
      newErrors.email = 'Email address is required';
      isValid = false;
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Basic Phone Validation
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!phoneRegex.test(form.phone) && form.phone.length < 10) {
      newErrors.phone = 'Please enter a valid phone number';
      isValid = false;
    }

    if (!form.message.trim()) {
      newErrors.message = 'Please enter your message';
      isValid = false;
    } else if (form.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitting(false);
      setIsSuccess(true);
      setForm({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-amber-700 dark:from-amber-300 dark:to-amber-500 bg-clip-text text-transparent">
                Get in Touch
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                Have specific requirements for your stay or need assistance? Our support team is available 24/7 to assist you.
                </p>
                
                <div className="space-y-8 text-lg mb-10">
                <div className="flex items-start group">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl mr-5 text-amber-500 group-hover:bg-amber-500 group-hover:text-white dark:group-hover:text-black transition-colors duration-300 shadow-md">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 dark:text-white text-xl">Visit Us</h4>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">2 Jehovah Street,<br />Lagos, Nigeria</p>
                    </div>
                </div>
                <div className="flex items-start group">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl mr-5 text-amber-500 group-hover:bg-amber-500 group-hover:text-white dark:group-hover:text-black transition-colors duration-300 shadow-md">
                        <Phone size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 dark:text-white text-xl">Call Us</h4>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">+234 XXX XXX XXXX</p>
                    </div>
                </div>
                <div className="flex items-start group">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl mr-5 text-amber-500 group-hover:bg-amber-500 group-hover:text-white dark:group-hover:text-black transition-colors duration-300 shadow-md">
                        <Mail size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 dark:text-white text-xl">Email Us</h4>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">info@ibhouse02.com</p>
                    </div>
                </div>
                </div>
            </div>

            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-green-900/30 w-full sm:w-auto justify-center group"
            >
              <Phone className="mr-3 group-hover:animate-pulse" size={20} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-amber-500 pl-4">Send us a Message</h3>
            
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center py-12 animate-fade-in">
                <div className="bg-green-500/10 p-6 rounded-full mb-6">
                    <CheckCircle className="text-green-500" size={64} />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h4>
                <p className="text-gray-600 dark:text-gray-400 text-center max-w-xs">We have received your message and will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1 ml-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full bg-gray-50 dark:bg-gray-900 border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 dark:text-red-400 text-xs mt-2 flex items-center ml-1"><AlertCircle size={12} className="mr-1"/> {errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1 ml-1">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className={`w-full bg-gray-50 dark:bg-gray-900 border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all`}
                            placeholder="john@example.com"
                        />
                        {errors.email && <p className="text-red-500 dark:text-red-400 text-xs mt-2 flex items-center ml-1"><AlertCircle size={12} className="mr-1"/> {errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1 ml-1">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            className={`w-full bg-gray-50 dark:bg-gray-900 border ${errors.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all`}
                            placeholder="+234..."
                        />
                        {errors.phone && <p className="text-red-500 dark:text-red-400 text-xs mt-2 flex items-center ml-1"><AlertCircle size={12} className="mr-1"/> {errors.phone}</p>}
                    </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1 ml-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full bg-gray-50 dark:bg-gray-900 border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-none`}
                    placeholder="Tell us about your stay requirements..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 dark:text-red-400 text-xs mt-2 flex items-center ml-1"><AlertCircle size={12} className="mr-1"/> {errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl shadow-amber-900/20 flex justify-center items-center transform active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                        <Loader2 className="animate-spin mr-2" size={20} /> Sending...
                    </span>
                  ) : (
                    <>
                      Send Message <Send className="ml-2" size={20} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;