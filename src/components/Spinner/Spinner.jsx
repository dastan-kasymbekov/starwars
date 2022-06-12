import React from 'react';
import RingLoader from "react-spinners/RingLoader";
import './Spinner.css'

const Spinner = () => {
  return (
    <div className='spinner'>
      <RingLoader color={"#FEE904"} size={50}/>
    </div>
  );
};

export default Spinner;