import './css/style.css';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  let divStyle = {width: 100, height: 100, backgroundImage: `url(${process.env.PUBLIC_URL+'img/member2.jpg'})`, backgroundSize: "cover"};
  return (
    <figure>
      <Header />
          <img src={process.env.PUBLIC_URL+'img/member1.jpg'} />
          <img src={process.env.PUBLIC_URL+'img/member2.jpg'} />

          <div style={divStyle}>

          </div>
      <Footer />
    </figure>
  );
}

export default App;
