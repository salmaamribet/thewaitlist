// App.jsx
import React from 'react';
import Navbar from './Components/Navbar'
import Heading from './Components/Headings'
import Separator from './Components/Separator'
import Features from './Components/Features'
import SeparatorTwo from './Components/SeparatorTwo'
import WaitListOne from './Components/WaitListOne'
import WaitListTwo from './Components/WaitListTwo'
import Footer from './Components/Footer';
import Averaging from './Components/Averaging'



const App = () => {
  return (
    
    <div>
      <Navbar />
      <Heading />
      <Separator />
      <SeparatorTwo/>
      <Features/>
      <WaitListOne />
      <Averaging/>
      <WaitListTwo/>
      <Footer/>
      
    </div>
  );
}

export default App;
