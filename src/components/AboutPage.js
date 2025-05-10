import React from 'react';
import { Users, CheckCircle, Award, ThumbsUp } from 'lucide-react';


function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-orange-500 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4 text-center">About Clean Bloom</h1>
          <p className="text-xl text-white text-center max-w-3xl mx-auto">
            Learn about our story, our mission, and what makes our cleaning services stand out in Nottingham.
          </p>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Clean Bloom was founded in 2025 with a simple mission: to provide exceptional cleaning services that help homes and businesses truly bloom with cleanliness and freshness.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small local service in Nottingham has quickly grown thanks to our unwavering commitment to quality, reliability, and customer satisfaction. Our founder, Sarah Johnson, built Clean Bloom on the belief that a clean space contributes to wellbeing, productivity, and peace of mind.
              </p>
              <p className="text-gray-600">
                Today, we're proud to serve hundreds of residential and commercial clients across Nottingham with professional cleaning services tailored to meet their specific needs.
              </p>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg">
            <div className="h-48 bg-gray-200"><img src="/images/image10.png" alt="Regular Cleaning" style={{width: '200%', height: '200%', objectFit: 'cover'}} />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            At Clean Bloom, our mission is to transform spaces through professional cleaning services that exceed expectations and improve quality of life. We believe that a clean environment is essential for health, productivity, and wellbeing.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Quality Service</h3>
              <p className="text-gray-600">
                We are committed to delivering the highest quality cleaning services with attention to detail and thoroughness in every task.
              </p>
            </div>
            
            <div className="p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Customer Focus</h3>
              <p className="text-gray-600">
                We prioritize the needs and preferences of our customers, building strong relationships based on trust and reliability.
              </p>
            </div>
            
            <div className="p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ThumbsUp size={32} className="text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Environmental Care</h3>
              <p className="text-gray-600">
                We use eco-friendly cleaning products and practices that are safe for your family, pets, and the environment.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Meet Our Team</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-center">
            Our team consists of trained, experienced, and dedicated cleaning professionals who take pride in their work and are committed to delivering excellence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200">
              <div className="h-48 bg-gray-200"><img src="/images/image11.png" alt="Regular Cleaning" style={{width: '100%', height: '134%', objectFit: 'cover'}} />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Ahmad Noori</h3>
                <p className="text-orange-500 font-medium mb-3">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  With over 15 years in the cleaning industry, Ahmad founded Clean Bloom to bring exceptional cleaning services to Nottingham.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200">
              <div className="h-48 bg-gray-200"><img src="/images/image12.png" alt="Regular Cleaning" style={{width: '100%', height: '134%', objectFit: 'cover'}} />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Milad Noori</h3>
                <p className="text-orange-500 font-medium mb-3">Operations Manager</p>
                <p className="text-gray-600 text-sm">
                  Milad ensures all our services run smoothly and efficiently, coordinating our cleaning teams for optimal results.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200">
              <div className="h-48 bg-gray-200"><img src="/images/image13.png" alt="Regular Cleaning" style={{width: '100%', height: '134%', objectFit: 'cover'}} />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Rehan Noori</h3>
                <p className="text-orange-500 font-medium mb-3">Customer Relations</p>
                <p className="text-gray-600 text-sm">
                  Rehan is dedicated to ensuring our customers receive personalized service and their feedback drives our continuous improvement.
                </p>
              </div>
            </div>
            
            {/* Team Member 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200">
              <div className="h-48 bg-gray-200"><img src="/images/image14.png" alt="Regular Cleaning" style={{width: '100%', height: '134%', objectFit: 'cover'}} />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Abdurrr Noori</h3>
                <p className="text-orange-500 font-medium mb-3">Training Supervisor</p>
                <p className="text-gray-600 text-sm">
                  Abdurrr ensures all our cleaning professionals are thoroughly trained in our cleaning methods and customer service standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Why Choose Clean Bloom?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-center">
            There are many cleaning services in Nottingham, but here's why our customers choose and stay with Clean Bloom.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <div className="mr-4 text-orange-500">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Experienced & Vetted Staff</h3>
                <p className="text-gray-600">
                  All our cleaning professionals undergo thorough background checks and rigorous training to ensure high standards.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <div className="mr-4 text-orange-500">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Satisfaction Guarantee</h3>
                <p className="text-gray-600">
                  If you're not completely satisfied with our service, we'll come back and re-clean the areas in question at no extra cost.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <div className="mr-4 text-orange-500">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Fully Insured</h3>
                <p className="text-gray-600">
                  We're fully insured and bonded, giving you peace of mind while our team works in your home or business.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <div className="mr-4 text-orange-500">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Eco-Friendly Products</h3>
                <p className="text-gray-600">
                  We use environmentally friendly cleaning products that are effective yet safe for your family, pets, and the planet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-orange-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience the Clean Bloom Difference?</h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Book your cleaning service today and let your home or business bloom with cleanliness.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/booking" className="bg-white text-orange-600 px-6 py-3 rounded-md font-bold text-lg shadow-lg hover:bg-gray-100 transition">
              Book a Cleaning
            </a>
            <a href="/contact" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-bold text-lg hover:bg-white hover:text-orange-600 transition">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;