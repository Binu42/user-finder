import React, { Fragment } from 'react';
import './spinner.css';

const Spinners = () => {
  return (
    <Fragment>
      <div className='loader'>
        <div className='spinner'>
          <div className='bounce1'></div>
          <div className='bounce2'></div>
          <div className='bounce3'></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Spinners;
