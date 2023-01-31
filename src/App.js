import './App.css';
import NavBar from './components/NavBar';
import Pets from './components/Pets';
import Footer from './components/Footer';







function App() {
  return (
    
    <div>
      <NavBar />
    
    <div className='container'>
      <h1>These are our pets for adoption: </h1>
      <Pets 
        name='Baloo'
        image='baloo'
        text='Qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem'/>
      <Pets 
        name='Chipi'
        image='chipi'
        text='Qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem'/>
      <Pets 
        name='Coco'
        image='coco'
        text='Qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem'/>
      <Pets 
        name='Grey'
        image='grey'
        text='Qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem'/>
      <Pets 
        name='Marley'
        image='marley'
        text='Qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem'/>
      <Pets 
        name='Poly'
        image='poly'
        text='Qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem'/>
      </div>
    <Footer />
      

    </div>
  );
}

export default App;
