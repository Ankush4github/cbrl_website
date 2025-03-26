'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 hover-section">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover-card">
              <h2 className="text-2xl font-semibold mb-6 text-primary dark:text-primary/90 hover-section">Lab Location</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p className="hover-section">
                  <strong className="dark:text-white">Address:</strong><br />
                  Clinical Biomarkers Research Laboratory<br />
                  Room No. 329,330, 3rd floor<br />
                  School of Medical Science and Technology<br />
                  Life Science Building<br />
                  Indian Institute of Technology Kharagpur<br />
                  Kharagpur-721302, West Bengal, India
                </p>
                <p className="hover-section">
                  <strong className="dark:text-white">Email:</strong><br />
                  <a href="mailto:cbrl.kc.smst@gmail.com" className="hover-link text-blue-600 dark:text-blue-400">
                    cbrl.kc.smst@gmail.com
                  </a>
                </p>
                <p className="hover-section">
                  <strong className="dark:text-white">Phone:</strong><br />
                  +91 3222 281220
                </p>
              </div>

              <h2 className="text-2xl font-semibold mb-6 mt-8 text-primary dark:text-primary/90 hover-section">Office Hours</h2>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p className="hover-section">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="hover-section">Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover-card">
              <h2 className="text-2xl font-semibold mb-6 text-primary dark:text-primary/90 hover-section">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover-input bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover-input bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover-input bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover-input bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2 px-4 rounded-md hover-button"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 