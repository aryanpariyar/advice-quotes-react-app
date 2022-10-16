
import React, { useEffect, useState } from "react";

const App = () => {
    const [advice, setAdvice] = useState("");

  useEffect(() => {
      const url = "https://api.adviceslip.com/advice";

      const fetchData = async () => {
          try {
              const response = await fetch(url);
              const json = await response.json();
              console.log(json.slip.advice);
              setAdvice(json.slip.advice);
          } catch (error) {
              console.log("error", error);
          }
      };

          fetchData();
      
  }, []);
  const getData = () => {
      const url = "https://api.adviceslip.com/advice";

      const fetchData = async () => {
          try {
              const response = await fetch(url);
              const json = await response.json();
              console.log(json.slip.advice);
              setAdvice(json.slip.advice);
          } catch (error) {
              console.log("error", error);
          }
      };

          fetchData();
      
  };
  

    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">
            {advice}
          </h1>
          <button className="button" onClick={getData} >
            <span className="span">GIVE ME ADVICE</span>
          </button>
        </div>
      </div>
       
    );
};

export default App;






