import { Suspense, lazy, useEffect, useState } from "react";
import jQuery from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./commun/Header";
import Footer from "./commun/Footer";
import Gototop from "./pages/others/Scrolltop";
import "./App.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "animate.css"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import AnimatedCursor from "react-animated-cursor";

const Home = lazy(() => import("./pages/components/Home"));
const About = lazy(() => import("./pages/components/About"));
const Services = lazy(() => import("./pages/components/Services"));
const ServiceDetails = lazy(() => import("./pages/components/ServiceDetails"));
const Works = lazy(() => import("./pages/components/Works"));
const WorkDetails = lazy(() => import("./pages/components/WorkDetails"));
const Contact = lazy(() => import("./pages/components/Contact"));
const Page404 = lazy(() => import("./pages/components/Page404"));
const Loader = <div className="preloader"><img className="preloader__image" width="60" src='assets/img/loader.png' alt="" /></div>

function App() {
  const [showSecondNav, setShowSecondNav] = useState(false)

  useEffect(() => {
		jQuery(window).on("scroll", function () {
      if (jQuery(".stricked-menu").length) {
        var headerScrollPos = 130;
        var stricky = jQuery(".stricked-menu");
        if (jQuery(window).scrollTop() > headerScrollPos) {
          stricky.addClass("stricky-fixed");
        } else if (jQuery(this).scrollTop() <= headerScrollPos) {
          stricky.removeClass("stricky-fixed");
        }
      }
      if (jQuery(".sticky-header__content").length) {
          setShowSecondNav(true)
        } else {
          setShowSecondNav(false)
      }
    });
	}, [])
  
  return (
    <>
    <AnimatedCursor
    innerSize={8}
    outerSize={8}
    color='243, 122, 45'
    outerAlpha={1}
    innerScale={0}
    innerStyle={{
      backgroundColor: '#F37A2D',
      zIndex: '999'
    }}
    outerStyle={{
      zIndex: '999'
    }}
    outerScale={2}
    clickables={[
      'a',
      'input[type="text"]',
      'input[type="email"]',
      'input[type="number"]',
      'input[type="submit"]',
      'input[type="image"]',
      'label[for]',
      'select',
      'textarea',
      'button',
      '.link',
      '.swiper-button-next',
      '.swiper-button-prev',
      '.search-close',
      '.mobile-nav__close'
    ]}/>
    <div className="page-wrapper">
      <Router>
        <Header showSecondNav={showSecondNav} />
        <Suspense fallback={Loader}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service-details" element={<ServiceDetails />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works-details" element={<WorkDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>
        <Footer />
        <Gototop/>
      </Router>
    </div>
    </>
  );
}

export default App;
