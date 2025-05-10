import React, { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('residential');

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Page Header */}
      <div className="bg-orange-500 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4 text-center">Our Cleaning Services</h1>
          <p className="text-xl text-white text-center max-w-3xl mx-auto">
            Professional cleaning solutions for homes and businesses across Nottingham. Choose the service that best suits your needs.
          </p>
        </div>
      </div>

      {/* Services Navigation */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <button
              className={`py-4 px-6 font-medium text-lg transition-colors ${
                activeCategory === 'residential' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-600 hover:text-orange-500'
              }`}
              onClick={() => setActiveCategory('residential')}
            >
              Residential Services
            </button>
            <button
              className={`py-4 px-6 font-medium text-lg transition-colors ${
                activeCategory === 'commercial' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-600 hover:text-orange-500'
              }`}
              onClick={() => setActiveCategory('commercial')}
            >
              Commercial Services
            </button>
            <button
              className={`py-4 px-6 font-medium text-lg transition-colors ${
                activeCategory === 'specialized' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-600 hover:text-orange-500'
              }`}
              onClick={() => setActiveCategory('specialized')}
            >
              Specialized Services
            </button>
          </div>
        </div>
      </div>

      {/* Services Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Residential Services */}
          {activeCategory === 'residential' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Residential Cleaning Services</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Whether you need a regular cleaner to keep your home tidy, a deep clean to tackle those hard-to-reach areas, or an end of tenancy clean, we've got you covered.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Regular Cleaning */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 bg-gray-200"><img src="/images/image1.png" alt="Regular Cleaning" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Regular Cleaning</h3>
                    <p className="text-gray-600 mb-4">
                      Our standard cleaning service provides a thorough clean of your home on a regular basis. Perfect for maintaining a clean and tidy home without the hassle.
                    </p>
                    <h4 className="font-semibold text-gray-800 mb-2">What's included:</h4>
                    <ul className="mb-4 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Dusting and wiping all accessible surfaces</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Vacuuming and mopping all floors</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Bathroom cleaning including toilets, sinks, and showers</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Kitchen cleaning including countertops and appliance exteriors</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Emptying bins and general tidying</span>
                      </li>
                    </ul>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Pricing:</h4>
                      <p className="text-gray-600">From £15 per hour (minimum 2 hours)</p>
                    </div>
                    <a href="#" className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600">
                      Book this service <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>

                {/* Deep Cleaning */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 bg-gray-200"><img src="/images/image2.png" alt="Regular Cleaning" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Deep Cleaning</h3>
                    <p className="text-gray-600 mb-4">
                      Our deep cleaning service is perfect for those areas that need extra attention or for homes that haven't been professionally cleaned in a while.
                    </p>
                    <h4 className="font-semibold text-gray-800 mb-2">What's included:</h4>
                    <ul className="mb-4 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>All regular cleaning services</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Deep cleaning of kitchens including inside appliances</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Thorough bathroom cleaning including descaling</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Cleaning inside cupboards and drawers</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Detailed cleaning of fixtures and fittings</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Cleaning of skirting boards and door frames</span>
                      </li>
                    </ul>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Pricing:</h4>
                      <p className="text-gray-600">From £18 per hour (minimum 4 hours)</p>
                    </div>
                    <a href="#" className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600">
                      Book this service <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>

                {/* End of Tenancy */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 bg-gray-200"><img src="/images/image3.png" alt="Regular Cleaning" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">End of Tenancy</h3>
                    <p className="text-gray-600 mb-4">
                      Our end of tenancy cleaning service is designed to help tenants get their full deposit back and landlords prepare their property for new tenants.
                    </p>
                    <h4 className="font-semibold text-gray-800 mb-2">What's included:</h4>
                    <ul className="mb-4 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Deep cleaning of all rooms and areas</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Professional oven cleaning</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Cleaning inside and outside of all cupboards</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Defrosting and cleaning of fridge/freezer</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Cleaning of windows from the inside</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Cleaning of all fixtures and fittings</span>
                      </li>
                    </ul>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Pricing:</h4>
                      <p className="text-gray-600">Starting from £140 for a studio flat</p>
                    </div>
                    <a href="#" className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600">
                      Book this service <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Commercial Services */}
          {activeCategory === 'commercial' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Commercial Cleaning Services</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Keep your business premises clean, hygienic, and presentable with our professional commercial cleaning services in Nottingham.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Office Cleaning */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 bg-gray-200"><img src="/images/image4.png" alt="Regular Cleaning" style={{width: '100%', height: '100%', objectFit: 'cover'}} /></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Office Cleaning</h3>
                    <p className="text-gray-600 mb-4">
                      Clean, tidy, and hygienic office spaces help promote productivity and create a positive impression on clients and visitors.
                    </p>
                    <h4 className="font-semibold text-gray-800 mb-2">What's included:</h4>
                    <ul className="mb-4 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Dusting and cleaning all surfaces and furniture</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Vacuuming and mopping floors</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Cleaning and sanitizing bathrooms</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Kitchen and break area cleaning</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Emptying bins and removing waste</span>
                      </li>
                    </ul>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Pricing:</h4>
                      <p className="text-gray-600">Customized quotes based on office size and frequency</p>
                    </div>
                    <a href="#" className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600">
                      Request a quote <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>

                {/* Retail Cleaning */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 bg-gray-200"><img src="/images/image5.png" alt="Regular Cleaning" style={{width: '100%', height: '100%', objectFit: 'cover'}} /></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Retail Cleaning</h3>
                    <p className="text-gray-600 mb-4">
                      First impressions matter in retail. Keep your store spotless and welcoming to enhance the customer shopping experience.
                    </p>
                    <h4 className="font-semibold text-gray-800 mb-2">What's included:</h4>
                    <ul className="mb-4 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Entrance and window cleaning</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Display cleaning and dusting</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Floor cleaning and maintenance</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Changing room and washroom cleaning</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Staff area and stockroom tidying</span>
                      </li>
                    </ul>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Pricing:</h4>
                      <p className="text-gray-600">Customized quotes based on store size and requirements</p>
                    </div>
                    <a href="#" className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600">
                      Request a quote <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>

                {/* Medical Facility Cleaning */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 bg-gray-200"><img src="/images/image6.png" alt="Regular Cleaning" style={{width: '100%', height: '100%', objectFit: 'cover'}} /></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Medical Facility Cleaning</h3>
                    <p className="text-gray-600 mb-4">
                      Healthcare environments require specialized cleaning to maintain hygiene standards and prevent cross-contamination.
                    </p>
                    <h4 className="font-semibold text-gray-800 mb-2">What's included:</h4>
                    <ul className="mb-4 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Sanitization of all surfaces</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Specialized cleaning for medical equipment areas</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Reception and waiting area maintenance</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Restroom disinfection and cleaning</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Proper waste management and disposal</span>
                      </li>
                    </ul>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Pricing:</h4>
                      <p className="text-gray-600">Customized quotes based on facility requirements</p>
                    </div>
                    <a href="#" className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600">
                      Request a quote <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Specialized Services */}
          {activeCategory === 'specialized' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Specialized Cleaning Services</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  We offer a range of specialized cleaning services to address specific cleaning needs and challenges.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Carpet Cleaning */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 bg-gray-200"><img src="/images/image7.png" alt="Regular Cleaning" style={{width: '100%', height: '100%', objectFit: 'cover'}} /></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Carpet Cleaning</h3>
                    <p className="text-gray-600 mb-4">
                      Our professional carpet cleaning service removes deep-seated dirt, stains, and allergens to refresh your carpets.
                    </p>
                    <h4 className="font-semibold text-gray-800 mb-2">What's included:</h4>
                    <ul className="mb-4 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Pre-treatment of stains and heavy soiling</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Hot water extraction cleaning</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Deodorizing treatment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Quick-dry technology</span>
                      </li>
                    </ul>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Pricing:</h4>
                      <p className="text-gray-600">From £80 per room</p>
                    </div>
                    <a href="#" className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600">
                      Book this service <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>

                {/* Window Cleaning */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 bg-gray-200"><img src="/images/image8.png" alt="Regular Cleaning" style={{width: '100%', height: '100%', objectFit: 'cover'}} /></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Window Cleaning</h3>
                    <p className="text-gray-600 mb-4">
                      Crystal clear windows inside and out let more light into your home and improve its appearance.
                    </p>
                    <h4 className="font-semibold text-gray-800 mb-2">What's included:</h4>
                    <ul className="mb-4 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Interior and exterior window cleaning</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Frame and sill cleaning</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Streak-free finish</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Hard water stain removal</span>
                      </li>
                    </ul>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Pricing:</h4>
                      <p className="text-gray-600">From £5 per window</p>
                    </div>
                    <a href="#" className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600">
                      Book this service <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>

                {/* Post-Construction Cleaning */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 bg-gray-200"><img src="/images/image9.png" alt="Regular Cleaning" style={{width: '100%', height: '100%', objectFit: 'cover'}} /></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Post-Construction Cleaning</h3>
                    <p className="text-gray-600 mb-4">
                      After construction or renovation work, our specialized cleaning service removes all dust, debris, and marks.
                    </p>
                    <h4 className="font-semibold text-gray-800 mb-2">What's included:</h4>
                    <ul className="mb-4 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Removal of construction dust from all surfaces</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Cleaning of newly installed fixtures and fittings</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Window and glass cleaning</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Floor cleaning and polishing</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                        <span>Removal of labels and protective coverings</span>
                      </li>
                    </ul>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Pricing:</h4>
                      <p className="text-gray-600">Customized quotes based on project size</p>
                    </div>
                    <a href="#" className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600">
                      Request a quote <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <section className="bg-orange-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience the Clean Bloom Difference?</h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Book your cleaning service today and let your home or business bloom with cleanliness.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#" className="bg-white text-orange-600 px-6 py-3 rounded-md font-bold text-lg shadow-lg hover:bg-gray-100 transition">
              Book a Cleaning
            </a>
            <a href="#" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-bold text-lg hover:bg-white hover:text-orange-600 transition">
              Get a Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;