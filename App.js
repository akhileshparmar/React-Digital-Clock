import React, { useState } from "react";

const App = () => {

  const [currtime, updtime] = useState()

  const UpdateTime = () => {

    let time = new Date().toLocaleTimeString();

    setInterval(updtime(time), 1000);

  }

  setInterval(UpdateTime, 1000);  

  return (
    <>
      <h1 className="Time"> {currtime} </h1>
    </>
  );
};

export default App;
