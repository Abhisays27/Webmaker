
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Work from './components/Work';
import Card from './components/Card';

import Faqs from './components/Faqs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';


function App() {
  return (
    <div className='' >
      <Navbar/>
      <Hero/>
      <Gallery/>
      <Work/>
      <Testimonials/>
      <Card/>
      <Faqs/>
      <Footer/>
     
    </div>
  );
}

export default App;
