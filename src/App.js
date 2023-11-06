import './App.css';
import Header from './Components/Header/Header';
import Features from './Components/Sections/Feature';
import Footer from './Components/Footer';
import OurServices from './Components/Sections/OurServices';

function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <main>
        <Features/>
        <OurServices/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
