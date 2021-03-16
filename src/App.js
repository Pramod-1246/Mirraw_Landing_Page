import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header/Header';
import BrandLogo from './BrandLogo/BrandLogo';
import Navbar from './Navbar/Navbar';
import CarouselQuickShop from './CarouselQuickShop/CarouselQuickShop';
import ListCatalogue from './ListCatalogue/ListCatalogue';
import ImageGallery from './ImageGallery/ImageGallery';

function App() {
  return (
    <div className="App">
      <Header />
      <BrandLogo />
      <Navbar />
      <CarouselQuickShop />
      <ListCatalogue />
      <ImageGallery />
      <div className="best-seller-carousel">
        Best Seller Carousel
      </div>
      <div className="recomends-carousel">
        Recomends Carousel
      </div>
      <div className="text-area">
        Text Area
      </div>
      <div className="sign-up-email">
        Sign-up Email
      </div>
      <div className="feedback-carousel">
        feedback carousel
      </div>
      <div className="footer-section">
        footer section
      </div>

    </div>
  );
}

export default App;
