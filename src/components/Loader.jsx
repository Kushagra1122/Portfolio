import React from 'react'
import loader from "../assets/gif/loader.gif"
const Loader = () => {
  return (
    <div>
      <img
        src={loader}
        alt="loader"
        className=" max-inline-size: 100"
      />
    </div>
  );
}

export default Loader
