import './css/style.css';
import Header from './components/Header';
import Panels  from './components/Panels';
import Footer from './components/Footer';
import { useState } from 'react';


function App() {
  const arr = ["member1","member2","member3","member4","member5","member6","member7","member8"];
  const deg = 360/arr.length;
  let [txt, setTxt] = useState(arr);

  return (
    <figure>
      <button onClick={()=>{
        let txt2 = [...txt];
        txt2[0] = 'member7';
        setTxt(txt2);
      }}>버튼</button>
      <Header />
        <section>
          {
            txt.map((data,index)=>{
              return <Panels key={index} num={index} txt={data} deg={deg} />
            })
          }
        </section>
      <Footer />
    </figure>
  );
}

export default App;
