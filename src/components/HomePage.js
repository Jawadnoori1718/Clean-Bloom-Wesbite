import React from 'react';

function HomePage() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-orange-500 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Professional Cleaning Services in Nottingham
            </h2>
            <p className="text-xl text-white mb-8">
              Let your home bloom with cleanliness. Affordable, reliable, and thorough cleaning services tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-md font-bold text-lg shadow-lg hover:bg-gray-100 transition">
                Book a Cleaning
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-white hover:text-orange-600 transition">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Cleaning Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our range of professional cleaning services designed to meet your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Regular Cleaning Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200">
                <img src="/images/image1.png" alt="Regular Cleaning" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Regular Cleaning</h3>
                <p className="text-gray-600 mb-4">
                  Our standard cleaning service covers all essentials to keep your home spotless and fresh.
                </p>
                <a href="/services" className="text-orange-500 font-medium hover:text-orange-600">
                  Learn more →
                </a>
              </div>
            </div>

            {/* Deep Cleaning Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200">
                <img src="/images/image2.png" alt="Deep Cleaning" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Deep Cleaning</h3>
                <p className="text-gray-600 mb-4">
                  Thorough cleaning service reaching all hard-to-access areas and stubborn spots.
                </p>
                <a href="/services" className="text-orange-500 font-medium hover:text-orange-600">
                  Learn more →
                </a>
              </div>
            </div>

            {/* End of Tenancy Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200">
                <img src="/images/image3.png" alt="End of Tenancy" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">End of Tenancy</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive cleaning to help tenants secure their full deposit return.
                </p>
                <a href="/services" className="text-orange-500 font-medium hover:text-orange-600">
                  Learn more →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience the Clean Bloom Difference?</h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Book your cleaning service today and let your home bloom with cleanliness.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-md font-bold text-lg shadow-lg hover:bg-gray-100 transition">
              Book a Cleaning
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-white hover:text-orange-600 transition">
              Get a Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;