import Header from "./Header";

function Intro() {
  return (
    <div>
      <Header />
      <div data-aos="zoom-in" className={"flex justify-center  "}>
        <div className={"p-6 flex-col sm:flex-row min-h-[86vh]"}>
          <div className={""}>
            <h1 className="font-bold md:text-xl lg:text-2xl text-2xl mb-1">
              Pranav Rajesh
              <span className={"wave text-3xl md:text-2xl lg:text-3xl"}>
                👋
              </span>{" "}
            </h1>
            <p className="md:text-md lg:text-lg text-lg mb-4">
              Full Stack UI/UX developer
            </p>
            <p className="text-sm font-light w-96">
              Hey! I am Pranav! I've been coding for over an year now. As a
              beginner to Programming, I started off with Python and over time,
              I started with Web Developement. I totally fell in Love with Web
              Developement. Eventually, I started learning ReactJS and started
              enjoying it. I am currently working on many projects which use
              ReactJS. My dream is to become a Full-Stack developer of a big
              tech company in the near future.
            </p>
          </div>
          <img
            objectFit={""}
            className={"h-60 lg:h-72 md:h-52"}
            src="https://i.pinimg.com/originals/88/e5/a4/88e5a4a52f0d7725c5e56364422b79fc.gif"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Intro;
