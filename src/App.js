import { TextField, Stack, Button } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
  const [interest, setInterest] = useState(0);
  const [principle, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [year, setYear] = useState(0);
  const [isPrincipleValid, setIsPrincipleValid] = useState(true);
  const [isRateValid, setIsRateValid] = useState(true);
  const [isYearValid, setIsYearValid] = useState(true);

  const validateInput = (e) => {
    const { name, value } = e.target;
    if (!!value.match(/^[-+]?[0-9]*\.?[0-9]+$/)) {
      if (name === "principle") {
        setPrinciple(value);
        setIsPrincipleValid(true);
      }
    } else {
      setPrinciple(value);
      setIsPrincipleValid(false);
    }
  };

  const validateRateInput = (e) => {
    const { name, value } = e.target;
    if (!!value.match(/^[-+]?[0-9]*\.?[0-9]+$/)) {
      if (name === "rate") {
        setRate(value);
        setIsRateValid(true);
      }
    } else {
      setRate(value);
      setIsRateValid(false);
    }
  };

  const validateYear = (e) => {
    const { name, value } = e.target;
    if (!!value.match(/^[-+]?[0-9]*\.?[0-9]+$/)) {
      if (name === "year") {
        setYear(value);
        setIsYearValid(true);
      }
    } else {
      setYear(value);
      setIsYearValid(false);
    }
  };

  const calculateInterest = () => {
    const p = parseFloat(principle);
    const r = parseFloat(rate);
    const t = parseFloat(year);
    const calculatedInterest = (p * r * t) / 100;
    setInterest(calculatedInterest);
  };

  const reset = () => {
    setInterest(0);
    setPrinciple(0);
    setYear(0);
    setRate(0);
  };

  return (
    <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
      <div style={{ width: '500px' }} className='bg-light p-3 rounded'>
        <h3>Simple Interest Calculator</h3>
        <p>Calculate your simple interest easily</p>
        <div style={{ height: '150px' }} className="interest-card w-100 bg-warning mt-5 d-flex justify-content-center align-items-center flex-column rounded shadow">
          <h1>₹ {' '} {interest.toFixed(2)} </h1>
          <p className='fw-bolder'>Total Simple Interest</p>
        </div>

        <form className='mt-5'>
          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic1" label="₹ Principal Amount" variant="outlined" value={principle} name="principle" onChange={(e) => validateInput(e)} />
          </div>
          {isPrincipleValid === false && <div className='mb-3 text-danger fw-bolder'>*Invalid input</div>}

          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic2" label="Rate of interest (p.a) %" variant="outlined" value={rate} name='rate' onChange={(e) => validateRateInput(e)} />
          </div>
          {isRateValid === false && <div className='mb-3 text-danger fw-bolder'>*Invalid input</div>}

          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic3" label="Time period (Yr)" variant="outlined" value={year} name='year' onChange={(e) => validateYear(e)} />
          </div>
          {isYearValid === false && <div className='mb-3 text-danger fw-bolder'>*Invalid input</div>}

          <Stack direction="row" spacing={2}>
            <Button disabled={!isYearValid || !isRateValid || !isPrincipleValid} type='button' style={{ height: '70px', width: '200px' }} variant="contained" onClick={calculateInterest}>Calculate</Button>
            <Button style={{ height: '70px', width: '200px' }} onClick={reset} variant="outlined">Reset</Button>
          </Stack>
        </form>
      </div>
    </div>
  );
}

export default App;
