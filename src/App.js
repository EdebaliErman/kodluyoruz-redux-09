import './App.css';
import Contents from './Components/Contents/Contents';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className='main-content'>
      <Header/>
      <Contents/>
      <Footer/>
    </div>
  );
}

export default App;
