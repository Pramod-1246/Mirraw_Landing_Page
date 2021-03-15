import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header/Header';
import BrandLogo from './BrandLogo/BrandLogo';

function App() {
  return (
    <div className="App">
      <Header />
      <BrandLogo />
      <div className="nav">
        Nav
      </div>
      <div className="carousel">
        Carousel
      </div>
      <div className="list-items">
        List Items
      </div>
      <div className="grid-items">
        Grid Items
      </div>
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
