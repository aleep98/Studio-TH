import HomePage from '../pages/Home';
import Services from '../pages/Services';
import Gallery from '../pages/Gallery';
import About from '../pages/About';
import { Header } from '../_components/Header';

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Header />
      <HomePage/>
      <Services/>
      <Gallery />
      <About />
    </div>
  );
}
