import Image from "next/image";
import Link from "next/link";
import { useState, CSSProperties } from "react";
// import PacmanLoader from "react-spinners/PacmanLoader";

// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };

// Simulere 2 sekunder lasting
export async function getStaticProps() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    props: {},
  };
}


function Open() {
  //   let [loading, setLoading] = useState(true);
  //   let [color, setColor] = useState("#666666");
  // Create your instance


  // tanker.
  // If screen size is mobile use .mobile css eller if desktop use .desktop
  // Trenger bare å endre hvem css som skal bli brukt. Eks en useState 

  // mobile / desktop = 
  let [display, setDisplay] = useState("mobile")
  let [backgroundImg, setBackgroundImg] = useState("/fold/mobile.png")

  return (
    <>
      <section className={display}>
        <Image src={backgroundImg} layout="fill" className="phone"/>
        <h1>KSS Portofolio side</h1>
        <section>
          <Link href="/">Om meg</Link>
        </section>
        <p>Dette er en side for å vise noe av hva jeg kan. </p>
      </section>
    </>
  );
}

export default Open;
