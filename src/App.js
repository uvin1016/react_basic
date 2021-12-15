import './css/style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import image1 from './img/member1.jpg';
import image2 from './img/member2.jpg';

function App() {
  let divStyle = {width: 100, height: 100, backgroundImage: `url(${image2})`, backgroundSize: "cover"};
  return (
    <figure>
      <Header />
          <img src={image1} />
          <img src={image2} />

          <div style={divStyle}>

          </div>
      <Footer />
    </figure>
  );
}

export default App;
