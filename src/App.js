import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header/Header';
import BrandLogo from './BrandLogo/BrandLogo';
import Navbar from './Navbar/Navbar';
import CarouselQuickShop from './CarouselQuickShop/CarouselQuickShop';
import ListCatalogue from './ListCatalogue/ListCatalogue';
import ImageGallery from './ImageGallery/ImageGallery';
import BestSellerComponent from './BestSellerComponent/BestSellerComponent';
import RecomendedForYouSection from './RecomendedForYouSection/RecomendedForYouSection';
import TextAreaComponent from './TextAreaComponent/TextAreaComponent';
import SignupSection from './SignupSection/SignupSection';
import FeedbackSection from './FeedbackSection/FeedbackSection';

function App() {
  return (
    <div className="App">
      <Header />
      <BrandLogo />
      <Navbar />
      <CarouselQuickShop />
      <ListCatalogue />
      <ImageGallery />
      <BestSellerComponent />
      <RecomendedForYouSection />
      <TextAreaComponent />
      <SignupSection />
      <FeedbackSection />
      <div className="footer-section">
        footer section
      </div>

    </div>
  );
}

export default App;
