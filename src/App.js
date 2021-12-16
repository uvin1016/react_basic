import './css/style.css';
import Header from './components/Header';
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
              let rotatePanel = {transform: `rotate(${deg*index}deg) translateY(-100vh)`}
              let picImg = {backgroundImage: `url(${process.env.PUBLIC_URL}/img/${data}.jpg)`}

              return(
                <article key={index} style={rotatePanel}>
                  <div className="inner">
                    <div className="pic" style={picImg}>
                      <div className="dot"></div>
                    </div>
                    <div className="txt">
                      <h2>{data}</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </article>
              )
            })
          }
        </section>
      <Footer />
    </figure>
  );
}

export default App;
