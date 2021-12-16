import './css/style.css';
import Header from './components/Header';
import Panels  from './components/Panels';
import Footer from './components/Footer';


function App() {
  const arr = ["member1","member2","member3","member4","member5","member6","member7","member8"];
  const deg = 360/arr.length;

  return (
    <figure>
      <Header />
        <section>
          {
            arr.map((data,index)=>{
              return <Panels key={index} num={index} txt={data} deg={deg} />
            })
          }
        </section>
      <Footer />
    </figure>
  );
}

export default App;
