import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import AboutUs from './pages/about-us/AboutUs';
import ContactUs from './pages/contact-us/ContactUs';
import TrackOrder from './pages/track-order/TrackOrder';
import Checkout from './pages/checkout/Checkout';
import Services from './pages/services/Services';
import TermsAndConditions from './pages/terms-and-conditions/TermsAndConditions';
import Success from './pages/success/Success';
import Cancel from './pages/cancel/Cancel';
import Admin from './admin/Admin';
import RouterAdminWrapper from './components/router-admin-wrapper/RouterAdminWrapper';


function App() {

  return (
    <div className="App">
      <RouterAdminWrapper>
        <Navbar/>
      </RouterAdminWrapper>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path='/track-order' element={<TrackOrder/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/terms-and-conditions' element={<TermsAndConditions/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='/cancel' element={<Cancel/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
      <RouterAdminWrapper>
        <Footer/>
      </RouterAdminWrapper>
    </div>
  );
}

export default App;
