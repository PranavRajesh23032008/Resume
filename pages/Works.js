import Header from "../components/Header";
import Project from "../components/Project";
import Whatsapp from "../Images/Whatsapp.png";
import Amazon from "../Images/Amazon.png";
import LandingPage from "../Images/LandingPage.png";
import Head from "next/head";

const Works = () => {
  return (
    <div
      style={{
        background: "#E2EFF7",
      }}
      className={"min-h-screen"}
    >
      <Head>
        <title>Pranav Rajesh | Works</title>
      </Head>
      <Header />
      <div className={"p-10"}>
        <span
          style={{
            borderBottom: "2px solid #8591F3",
          }}
          className={"text-3xl font-semibold"}
        >
          Works
        </span>
        <div
          className={
            "grid grid-flow-row-denses lg:space-x-3 md:grid-cols-2 lg:grid-cols-3 mt-10"
          }
        >
          <Project
            image={Whatsapp}
            name={"Whatsapp Clone"}
            githubLink={
              "https://github.com/PranavRajesh23032008/Whatsapp-Clone"
            }
          />
          <Project
            image={Amazon}
            name={"Amazon Clone"}
            githubLink={"https://github.com/PranavRajesh23032008/amazon-build"}
          />
          <Project
            image={LandingPage}
            name={"Landing Page"}
            githubLink={"https://github.com/PranavRajesh23032008/landing-page/"}
          />
        </div>
      </div>
    </div>
  );
};

export default Works;
