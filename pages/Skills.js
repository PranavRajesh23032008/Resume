import Head from "next/head";
import EachSkill from "../components/Container";
import Header from "../components/Header";

const Skills = () => {
  return (
    <div
      style={{
        background: "#E2EFF7",
      }}
      className={"min-h-screen"}
    >
      <Head>
        <title>Pranav Rajesh | Skills</title>
      </Head>
      <Header />
      <div className={" p-10"}>
        <span
          style={{
            borderBottom: "2px solid #8591F3",
          }}
          className={" text-3xl font-semibold"}
        >
          Skills
        </span>
        <div
          className={
            "grid grid-flow-row-denses lg:space-x-3 sm:grid-cols-2 md:grid-cols-3 -z-10 mt-10"
          }
        >
          <EachSkill
            name={"ReactJS"}
            buttonRedirect={"https://reactjs.org"}
            description={
              "React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies."
            }
            image={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
            }
          />
          <EachSkill
            name={"NextJS"}
            buttonRedirect={"https://nextjs.org"}
            description={
              "Next.js is an open-source development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites"
            }
            image={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
            }
          />
          <EachSkill
            name={"Styled Components"}
            buttonRedirect={"https://styled-components.com"}
            description={
              "Styled Components utilises tagged template literals to style your components. It removes the mapping between components and styles."
            }
            image={"https://github.com/styled-components.png"}
          />
          <EachSkill
            name={"TailwindCSS"}
            buttonRedirect={"https://tailwindcss.com"}
            description={
              "Tailwind is a utility-first CSS framework. ... Instead Tailwind CSS operates on a lower level and provides you with a set of CSS helper classes."
            }
            image={
              "https://iconape.com/wp-content/png_logo_vector/tailwind-css-logo.png"
            }
          />
          <EachSkill
            name={"Firebase"}
            buttonRedirect={"https://firebase.google.com/docs"}
            description={
              "Firebase is a platform developed by Google for creating mobile and web applications. It was originally an independent company founded in 2011."
            }
            image={
              "https://www.gstatic.com/devrel-devsite/prod/v0089c83aa8227c3439bf2708c0795dd13db533711d44eb626e640152d9fdf05e/firebase/images/touchicon-180.png"
            }
          />
          <EachSkill
            name={"Git"}
            buttonRedirect={"https://git-scm.com/doc"}
            description={
              "Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development."
            }
            image={"https://avatars.githubusercontent.com/u/18133?s=200&v=4"}
          />
          <EachSkill
            name={"React Native"}
            buttonRedirect={"https://reactnative.dev/docs/getting-started"}
            description={
              "React Native is an open-source mobile application framework created by Facebook, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web apps by allowing developers to use the React Library for native Development"
            }
            image={
              "https://images.squarespace-cdn.com/content/v1/58d20c79725e25b221549193/1523276257276-EMMKZ7G962SDZKN2APIN/react_nativ_build_mobile_app-img.png"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
