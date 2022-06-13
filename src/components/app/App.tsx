import Footer from '../footer/Footer';
import Header from '../header/header';
import Main from '../main/Main';
import './app.scss';

function App() {
  return (
    <>
      <div className="app-content">
        <Header />
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default App;
