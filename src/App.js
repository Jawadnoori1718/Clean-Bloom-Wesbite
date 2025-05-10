import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';  // Add this import
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import BookingPage from './components/BookingPage';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Wrap all pages with Layout */}
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
        <Route path="/booking" element={<Layout><BookingPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;