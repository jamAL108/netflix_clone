import './App.css';
import React , { useState } from 'react';

function App() {
  const [file,setfile]= useState();
  const apicall =()=>{
        
  }
  return (
      <form action="POSt">

        <input type="file" placeholder='upload ut file' onChange={(e)=>{
          setfile(e.target.files[0]);
          console.log(file);
          apicall();
        }} />
      </form>
  );
}

export default App;
