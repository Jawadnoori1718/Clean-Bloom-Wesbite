import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Page Header */}
      <div className="bg-orange-500 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4 text-center">Contact Us</h1>
          <p className="text-xl text-white text-center max-w-3xl mx-auto">
            Have questions or want to book a cleaning service? Get in touch with our friendly team today.
          </p>
        </div>
      </div>
      
      {/* Contact Information */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              
              {formSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <p className="font-bold">Thank you for contacting us!</p>
                  <p>We'll get back to you as soon as possible.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Full Name *
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                      Email *
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                    Subject *
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
                    type="submit"
                  >
                    <Send size={18} className="mr-2" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Phone size={20} className="text-orange-500 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-600">(+44) 737 535 3193</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <Mail size={20} className="text-orange-500 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600">info@cleanbloom.co.uk</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <MapPin size={20} className="text-orange-500 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-gray-600">61 Bridlington Street, Nottingham, NG7 5BG</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <Clock size={20} className="text-orange-500 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold">Office Hours</p>
                      <p className="text-gray-600">Monday to Friday: 8am - 8pm</p>
                      <p className="text-gray-600">Saturday: 10am - 6pm</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Service Areas</h3>
                <p className="text-gray-600 mb-4">
                  We provide cleaning services throughout Nottingham and surrounding areas, including:
                </p>
                
                <ul className="grid grid-cols-2 gap-2">
                  <li className="text-gray-600">• City Centre</li>
                  <li className="text-gray-600">• West Bridgford</li>
                  <li className="text-gray-600">• Beeston</li>
                  <li className="text-gray-600">• Wollaton</li>
                  <li className="text-gray-600">• Mapperley</li>
                  <li className="text-gray-600">• Sherwood</li>
                  <li className="text-gray-600">• Arnold</li>
                  <li className="text-gray-600">• Gedling</li>
                </ul>
                
                <p className="text-gray-600 mt-4">
                  Not sure if we cover your area? Get in touch and we'll let you know!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Find Us</h2>
          <div className="h-96 bg-gray-200 rounded">
          <div className="h-48 bg-gray-200"><img src="/images/image15.png" alt="Regular Cleaning" style={{width: '100%', height: '200%', objectFit: 'cover'}} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <section className="bg-orange-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready for a Cleaner, Fresher Space?</h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Book your cleaning service today and experience the Clean Bloom difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#" className="bg-white text-orange-600 px-6 py-3 rounded-md font-bold text-lg shadow-lg hover:bg-gray-100 transition">
              Book a Cleaning
            </a>
            <a href="#" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-bold text-lg hover:bg-white hover:text-orange-600 transition">
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;