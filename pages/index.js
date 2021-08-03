import Head from "next/head";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Intro from "../components/Intro";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className={"overflow-hidden"}>
      <Head>
        <title>Pranav Rajesh | Resumé</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
    </div>
  );
}
