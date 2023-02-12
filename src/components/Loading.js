import React from 'react';
import {Spinner} from 'react-bootstrap';
import './Loading.css';

const Loading = () => {
    return (
        <div className='spinner'>
          <Spinner  animation='border' style={{width:'5rem', height:'5rem', borderWidth: '0.4em'}}/>
          <h2>LOADING...</h2>
          
        </div>
    );
};

export default Loading;
