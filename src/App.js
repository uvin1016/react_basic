import './css/style.css';
import Header from './components/Header';
import Panels  from './components/Panels';
import Btns from './components/Btns';
import Footer from './components/Footer';
import { useState } from 'react';


function App() {
  const arr = ["member1","member2","member3","member4","member5","member6","member7","member8"];
  const deg = 360/arr.length;
  let [txt] = useState(arr);

  return (
    <figure>
      <Header />
      <section>
        {
          txt.map((data,index)=>{
            return <Panels key={index} num={index} txt={data} deg={deg} />
          })
        }
      </section>
      <Btns deg={deg} />
      <Footer />
    </figure>
  );
}

export default App;

