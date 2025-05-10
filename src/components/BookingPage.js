import React, { useState } from 'react';
import { Calendar, Clock, Check, Home, Building } from 'lucide-react';

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: '',
    propertyType: '',
    bedrooms: '',
    bathrooms: '',
    date: '',
    time: '',
    frequency: 'one-time',
    extras: [],
    name: '',
    email: '',
    phone: '',
    address: '',
    postcode: '',
    notes: ''
  });
  
  const [bookingComplete, setBookingComplete] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        extras: [...formData.extras, name]
      });
    } else {
      setFormData({
        ...formData,
        extras: formData.extras.filter(extra => extra !== name)
      });
    }
  };
  
  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };
  
  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    setBookingComplete(true);
  };
  
  // Function to calculate estimated price
  const calculatePrice = () => {
    let basePrice = 0;
    
    // Base price based on service type
    switch(formData.serviceType) {
      case 'regular':
        basePrice = 60;
        break;
      case 'deep':
        basePrice = 120;
        break;
      case 'end-of-tenancy':
        basePrice = 180;
        break;
      default:
        basePrice = 0;
    }
    
    // Add for bedrooms and bathrooms
    if (formData.bedrooms) {
      basePrice += parseInt(formData.bedrooms) * 10;
    }
    
    if (formData.bathrooms) {
      basePrice += parseInt(formData.bathrooms) * 15;
    }
    
    // Add for extras
    formData.extras.forEach(extra => {
      switch(extra) {
        case 'oven':
          basePrice += 30;
          break;
        case 'fridge':
          basePrice += 25;
          break;
        case 'windows':
          basePrice += 20;
          break;
        case 'cabinets':
          basePrice += 15;
          break;
        default:
          break;
      }
    });
    
    // Discount for frequency
    if (formData.frequency === 'weekly') {
      basePrice = basePrice * 0.85; // 15% discount
    } else if (formData.frequency === 'biweekly') {
      basePrice = basePrice * 0.9; // 10% discount
    } else if (formData.frequency === 'monthly') {
      basePrice = basePrice * 0.95; // 5% discount
    }
    
    return basePrice.toFixed(2);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-orange-500 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4 text-center">About Clean Bloom</h1>
          <p className="text-xl text-white text-center max-w-3xl mx-auto">
          Schedule your professional cleaning service in just a few easy steps.
          </p>
        </div>
      </div>
      
      {/* Booking Form */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Request a Booking</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="serviceType">
                  Service Type
                </label>
                <select
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Service</option>
                  <option value="regular">Regular Cleaning</option>
                  <option value="deep">Deep Cleaning</option>
                  <option value="end-of-tenancy">End of Tenancy Cleaning</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                    Full Name
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
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                    Email
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
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">
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
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2" htmlFor="date">
                    Preferred Date
                  </label>
                  <div className="flex items-center">
                    <Calendar size={20} className="text-orange-500 mr-2" />
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2" htmlFor="time">
                    Preferred Time
                  </label>
                  <div className="flex items-center">
                    <Clock size={20} className="text-orange-500 mr-2" />
                    <select
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Time</option>
                      <option value="8:00 AM">8:00 AM</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2" htmlFor="frequency">
                    Service Frequency
                  </label>
                  <select
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="frequency"
                    name="frequency"
                    value={formData.frequency}
                    onChange={handleChange}
                  >
                    <option value="one-time">One-time Service</option>
                    <option value="weekly">Weekly (15% off)</option>
                    <option value="biweekly">Bi-weekly (10% off)</option>
                    <option value="monthly">Monthly (5% off)</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="address">
                  Address
                </label>
                <textarea
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="address"
                  name="address"
                  rows="3"
                  placeholder="Your Full Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="notes">
                  Special Instructions (Optional)
                </label>
                <textarea
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="notes"
                  name="notes"
                  rows="3"
                  placeholder="Any special instructions or requirements"
                  value={formData.notes}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline w-full"
                >
                  Request Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <section className="bg-orange-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure What You Need?</h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Contact our team for personalized advice and a custom quote tailored to your specific cleaning needs.
          </p>
          <a href="/contact" className="bg-white text-orange-600 px-6 py-3 rounded-md font-bold text-lg shadow-lg hover:bg-gray-100 transition">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;