import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ImageAvatars from './components/HeaderRoundimg';
import ImageAvatar from './components/Headersquareimg';
import Product from './components/product';
import Deals from './components/Deals';
import Headerimg from './components/Headerimg';

function App() {
  return (
    <>
    <header>
     <Headerimg />
     <Navbar />
     <ImageAvatars />
     <ImageAvatar />
    </header>
    <main>
      <Deals />
      <Product />
    </main>

    <Footer />
    </>
  );
};

export default App;
