import Head from "next/head";
import Container from "../components/Container";
import Header from "../components/Header";

const Hobbies = () => {
  return (
    <div
      style={{
        background: "#E2EFF7",
      }}
      className={"min-h-screen"}
    >
      <Head>
        <title>Pranav Rajesh | Hobbies</title>
      </Head>
      <Header />
      <div className={"p-10"}>
        <span
          style={{
            borderBottom: "2px solid #8591F3",
          }}
          className={"text-3xl font-semibold"}
        >
          Hobbies
        </span>
        <div
          className={
            "grid grid-flow-row-denses lg:space-x-3 sm:grid-cols-2 md:grid-cols-3 mt-10"
          }
        >
          <Container
            name={"Play Piano"}
            buttonPosition={"hidden"}
            image={
              "https://i.pinimg.com/originals/03/c4/f9/03c4f9fc9c774e7698380dbd1dd58634.png"
            }
          />
          <Container
            name={"Programming"}
            buttonPosition={"hidden"}
            image={"https://image.flaticon.com/icons/png/512/1995/1995485.png"}
          />
          <Container
            name={"Listening to Music"}
            buttonPosition={"hidden"}
            image={
              "https://www.wamc.org/sites/wamc/files/styles/x_large/public/201612/Headphone-Silhouette-Clip-Art-PNG.png"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
