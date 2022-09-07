import { useState, CSSProperties } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function LoaderPacman() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#666666");

  return (
    <div className="sweet-loading">
      {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button> */}
      {/* <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" /> */}

      <PacmanLoader color={color} loading={loading} cssOverride={override} size={150} />
    </div>
  );
}

export default LoaderPacman;