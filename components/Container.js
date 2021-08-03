const Collection = ({
  name,
  description,
  image,
  buttonRedirect,
  buttonPosition,
}) => {
  return (
    <div data-aos="fade-up">
      <div
        style={{ background: "#E2EFF7" }}
        className={
          "shadow-2xl dark:shadow-none relative flex flex-col m-10 p-10 rounded-lg text-black"
        }
      >
        <div className={"flex flex-col"}>
          <div className={"mx-auto"}>
            <img
              height={170}
              width={170}
              objectFit={"contain"}
              className={"mb-3 "}
              src={image}
              objectFit={"contain"}
            />
          </div>
          <h1 className="mx-auto cursor-pointer mt-4 mb-6 text-xl font-bold">
            {name}
          </h1>
          <h1 className="w-full text-sm description font-thin md:text-md">
            {description}
          </h1>
          <div className={"mx-auto"}>
            <a target={"_blank"} href={buttonRedirect}>
              <button
                style={{
                  background: "rgba(102, 114, 242, 0.75)",
                  width: "fit-contain",
                }}
                className={`text-sm mt-5 ${buttonPosition} text-white rounded-lg py-2 px-4 text-xs sm:text-xm sm:px-7 transition duration-170 hover:brightness-125`}
              >
                Learn more about <b>{name}</b>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
