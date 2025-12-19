import { Header } from '../_components/Header';
import { Footer } from '../_components/Footer';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Gallery from '../pages/Gallery';

export default function Page() {
  return (
    <>
      <Header />
      <Home />
      <Services />
      <Gallery />
      <About />
      <Footer />
    </>
  );
}