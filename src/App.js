import './App.css';


import Pets from './components/Pets';
import Footer from './components/Footer';







function App() {
  return (
    <div className='App'>
    
    
      
      <div className='container'>
      <h1>These are our pets for adoption: </h1>
      <Pets 
        name='Baloo'
        image='baloo'
        text='My family and I adopted it when my little sister was two years and a half and she wanted a pet. My parents had decided to adopt a dog because they dont like to have cats inside the house.'/>
      <Pets 
        name='Chipi'
        image='chipi'
        text='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'/>
      <Pets 
        name='Coco'
        image='coco'
        text='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'/>
      <Pets 
        name='Grey'
        image='grey'
        text='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'/>
      <Pets 
        name='Marley'
        image='marley'
        text='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'/>
      <Pets 
        name='Poly'
        image='poly'
        text='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'/>
      </div>
    <Footer />
      

    </div>
  );
}

export default App;
