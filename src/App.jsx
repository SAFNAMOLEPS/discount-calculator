
import './App.css';
import Header from './Header';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';

function App() {
  const[amount,setAmount]=useState(0);
  const[discount,setDiscount]=useState(0);
  const[result,setResult]=useState(0);
  const[balnce,SetBalnce]=useState(0)
  const calculate=(e)=>{
    const output=amount-(amount*discount/100)
    const balance=amount-output;
    console.log(output); 
    setResult(output);
    SetBalnce(balance)
    
   }
   const reset=(e)=>{
    setAmount(0);
    setDiscount(0);
    setResult(0);
    SetBalnce(0)
   }
  return (
    <div className="App">
      <Header/>
      
      <div className="container">
        
        <div className="box1">
        <h3>Calculate Discount Here</h3>
          <TextField fullWidth id="outlined-basic" value={amount || ""} onChange={(e)=>setAmount(e.target.value)} label="Original Price " variant="outlined" /><br /><br />
          
          <TextField fullWidth id="outlined-basic"value={discount || ""} onChange={(e)=>setDiscount(e.target.value)}  label="Discount %" variant="outlined" />
          <div className="button">
          <Button variant="outlined" onClick={e=>calculate(e)}>Calculate</Button>
          
          </div>
          

        </div>
        <div className="box1">
          <h3>After Discount</h3>
          <TextField fullWidth id="outlined-basic" value={result || ""}  label="You have to Pay" variant="outlined" /><br /><br />
          
          <TextField fullWidth id="outlined-basic" value={balnce || ""}  label="You are saved " variant="outlined" />
          <div className="button">
            <Button variant="outlined" onClick={e=>reset(e)}>Reset</Button>
          </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
