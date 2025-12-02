import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import OrderForm from './components/OrderForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white selection:bg-purple-200">
      <Header />
      <main>
        <Hero />
        <Features />
        <OrderForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;