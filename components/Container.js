const Collection = ({
  name,
  description,
  image,
  buttonRedirect,
  buttonPosition,
}) => {
  return (
    <div
      data-aos="fade-up"
      className={
        "shadow-lg mt-3 m-2  bg-white relative flex flex-col items-center justify-end p-7 rounded-2xl text-black"
      }
    >
      {/* Main */}
      <div className={"flex flex-col justify-start"}>
        <div className={"mx-auto"}>
          <img
            height={180}
            width={180}
            objectFit={"contain"}
            className={"mb-3"}
            src={image}
          />
        </div>
        <div className={"w-full"}>
          <p className={" font-bold text-center text-xl mt-4 mb-6"}>{name}</p>
          <p className={"description font-thin text-xs my-2"}>{description}</p>
          <div className={"text-center"}>
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
