// import { useState, CSSProperties } from "react";
// import PacmanLoader from "react-spinners/PacmanLoader";

// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };

// Simulere 2 sekunder lasting
export async function getStaticProps() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return {
    props: {},
  };
}


function Open() {
  //   let [loading, setLoading] = useState(true);
  //   let [color, setColor] = useState("#666666");
  // Create your instance

  return (
    <>
      <section>
        <h1>Hi, and welcome to my portofolio page</h1>
      </section>
    </>
  );
}

export default Open;
