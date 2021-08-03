import { useRouter } from "next/dist/client/router";

const Header = () => {
  const router = useRouter();
  return (
    <div
      className="py-4 sm:px-8 px-2 flex items-center shadow-lg sticky top-0 z-[10]"
      style={{ background: "#E2EFF7", height: "13vh" }}
    >
      <div
        className={
          "mx-auto sm:ml-auto space-x-3 px-3 lg:space-x-20 md:space-x-5"
        }
      >
        <button
          onClick={() => router.push("/")}
          style={{ background: "rgba(102, 114, 242, 0.75)" }}
          className={
            "text-white py-2 px-4 text-sm sm:text-md sm:px-7 rounded-lg transition duration-300 hover:brightness-125"
          }
        >
          Home
        </button>
        <button
          onClick={() => router.push("Skills")}
          style={{ background: "rgba(102, 114, 242, 0.75)" }}
          className={
            "text-white py-2 px-4 text-sm sm:text-md sm:px-7 rounded-lg transition duration-300 hover:brightness-125"
          }
        >
          Skills
        </button>
        <button
          onClick={() => router.push("Hobbies")}
          style={{ background: "rgba(102, 114, 242, 0.75)" }}
          className={
            "text-white py-2 px-4 text-sm sm:text-md sm:px-7 rounded-lg transition duration-300 hover:brightness-125"
          }
        >
          Hobbies
        </button>
        <button
          onClick={() => router.push("Works")}
          style={{ background: "rgba(102, 114, 242, 0.75)" }}
          className={
            "text-white py-2 px-4 text-sm sm:text-md sm:px-7 rounded-lg transition duration-300 hover:brightness-125"
          }
        >
          My Works
        </button>
      </div>
    </div>
  );
};

export default Header;
