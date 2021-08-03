import Image from "next/image";

const Project = ({ name, githubLink, image }) => {
  return (
    <div data-aos="fade-up" className={"mb-16 mr-5 shadow-lg p-7 rounded-2xl"}>
      <Image objectFit={"contain"} src={image} alt="" className={"md:h-40 "} />
      <div className={"text-center"}>
        <h1 className={"font-semibold text-2xl my-3"}>{name}</h1>
        <a href={githubLink} target={"_blank"}>
          <button
            style={{ background: "rgba(102, 114, 242, 0.75)" }}
            className={
              "text-white rounded-lg py-2 px-4 text-sm sm:text-md sm:px-7 transition duration-300 hover:brightness-125"
            }
          >
            View Source Code
          </button>
        </a>
      </div>
    </div>
  );
};

export default Project;
