import { useState } from "react";
import { CircleLoader } from "react-spinners";
import "./App.css";

const App = () => {
  const [advice, setAdvice] = useState(null);
  const [loader, setLoader] = useState(false);

  const handleanadvice = async (ev) => {
    ev.preventDefault();

    try {
      setLoader(true);
      const response = await fetch(`https://api.adviceslip.com/advice`);

      console.log(response);
      const data = await response.json();
      console.log(data);
      setLoader(false);

      setAdvice(data.slip.advice);
    } catch (error) {
      setAdvice("There was a problem getting the advice, try again later");
      setLoader(false);
    }
  };

  return (
    <>
      <button onClick={handleanadvice}>Give me an Advice</button>

      <div className="display-advice">
        <h1>{advice}</h1>
      </div>
      <div className="loading-effect">
        {loader && <CircleLoader color="black" size={50} />}
      </div>
      <div className="done-by">
        <h3>
          Done by: <a href="https://github.com/WeBstwr">webster ifedha</a>
        </h3>
      </div>
    </>
  );
};

export default App;
