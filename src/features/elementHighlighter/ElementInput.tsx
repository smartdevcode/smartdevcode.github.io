import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { highlightElements } from './elementSlice';

const ElementInput = () => {
  const [inputName, setInputName] = useState({ first: '', last: '' });
  const dispatch = useAppDispatch();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputName((prev) => ({ ...prev, [name]: value }));
  };

  const handleHighlight = () => {
    dispatch(highlightElements(inputName));
  };

  return (
    <>
        <div className="row">
          <div className="col">
            <span className="text-input-words  w-100">First Name</span>
            <input type="text" name="first" id="first-name" value={inputName.first} onChange={handleInput} className="form-control bg-secondary text-white mt-2 no-border" placeholder="First Name"/>
          </div>
          <div className="col">
            <span className="text-input-words  w-100">Last Name</span>
            <input type="text" name="last" id="last-name" value={inputName.last} onChange={handleInput} className="form-control bg-secondary text-white mt-2 no-border" placeholder="Last Name"/>
          </div>
        </div>

        <div className="row">
          <div className="input-group mb-3 mt-3">
            <button className="btn btn-success w-100" onClick={handleHighlight}>
              Breakify
            </button>
          </div>
        </div>
    </>
  );
};

export default ElementInput;
