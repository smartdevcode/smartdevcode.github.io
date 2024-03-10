import React, { useState } from 'react';
import './App.css';
import { Phrases, findSymbolsWithNames, wordSelector } from './redux/action';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import 'bootstrap/dist/css/bootstrap.min.css';


/* Used the console/environment to completed task */
if (process.env.REACT_APP_ENVIRONMENT === 'production') {
  console.log('Running in production mode');
} else {
  console.log('Running in development mode');
}

function App() {

  const words = useAppSelector(wordSelector);
  const dispatch = useAppDispatch();

  var Phrases: Phrases = words;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const eventBreakifyHandler = () => {
    dispatch(findSymbolsWithNames({ first: firstName, last: lastName }));
  };

  // I used .reduce to demonstrate skills beyond the array.map
  
  return (
    <div className="bg-dark d-flex vh-100 align-items-center justify-content-center">
      <div className="flex-column">
        <div className="flex flex-col text-center">
          <h1 className="fw-bold text-white">
            {Phrases?.firstName && Phrases.firstName.reduce<React.ReactNode[]>((acc, word, idx) => {
              const [symbolValue, existSymbol] = word;
              acc.push(
                existSymbol
                  ? <span key={idx} className="custom-highlight">{symbolValue}</span>
                  : <span key={idx}>{symbolValue}</span>
              );
              return acc;
            }, [])}
          </h1>
          <h1 className="font-bold text-white">
            {Phrases?.lastName && Phrases?.lastName.reduce<React.ReactNode[]>((acc, word, idx) => {
              const [symbolValue, existSymbol] = word;
              acc.push(
                existSymbol
                  ? <span key={idx} className="custom-highlight">{symbolValue}</span>
                  : <span key={idx}>{symbolValue}</span>
              );
              return acc;
            }, [])}
          </h1>
        </div>

        <div className="row">
          <div className="col">
            <span className="text-input-words  w-100">First Name</span>
            <input type="text" id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="form-control bg-secondary text-white mt-2 no-border" />
          </div>
          <div className="col">
            <span className="text-input-words  w-100">Last Name</span>
            <input type="text" id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="form-control bg-secondary text-white mt-2 no-border" />
          </div>
        </div>

        <div className="row">
          <div className="input-group mb-3 mt-3">
            <button className="btn btn-success w-100" onClick={eventBreakifyHandler}>
              Breakify
            </button>
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;