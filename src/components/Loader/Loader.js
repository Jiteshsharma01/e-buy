import React from 'react';
import "./Loader.scss";
import {loader} from "../../utils/images";
import {bikeLoader} from "../../utils/images";

export const BikeLoader = () => {
  return (
    <div className='container'>
      <div className='loader flex justify-center align-center'>
        <img src = {bikeLoader} alt = "" className='w-50' />
      </div>
    </div>
  )
}

const Loader = () => {
  return (
    <div className='container'>
      <div className='loader flex justify-center align-center'>
        <img src = {loader} alt = "" />
      </div>
    </div>
  )
}

export default Loader
