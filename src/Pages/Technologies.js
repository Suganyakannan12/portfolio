import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    vscode,
    git,
    github,
    npm,
    express,
    firebase,
    mongodb,
    nodejs,
  } = techStackDetails;

  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      {/* Tech Stack Section */}
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>

      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={html} title="HTML" alt="HTML Logo" />
        <img src={css} title="CSS" alt="CSS Logo" />
        <img src={js} title="JavaScript" alt="JavaScript Logo" />
        <img src={react} title="React" alt="React Logo" />
        <img src={redux} title="Redux" alt="Redux Logo" />
        <img src={tailwind} title="Tailwind CSS" alt="Tailwind CSS Logo" />
        
      </section>

      {/* Backend & Services Section */}
      <section className="pt-10">
        <h2 className="text-xl text-dark-heading dark:text-light-heading md:text-2xl font-semibold">
          Backend & Services
        </h2>
        <p className="text-content py-2 lg:max-w-3xl">
          Server-side technologies and cloud services I use
        </p>
      </section>

      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={nodejs} title="Node.js" alt="Node.js Logo" />
        <img src={express} title="Express.js" alt="Express Logo" />
        <img src={mongodb} title="MongoDB" alt="MongoDB Logo" />
        <img src={firebase} title="Firebase" alt="Firebase Logo" />
      </section>

      {/* Tools Section */}
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>

      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="VS Code Logo" />
        <img src={git} title="Git" alt="Git Logo" />
        <img src={github} title="GitHub" alt="GitHub Logo" />
        <img src={npm} title="NPM" alt="NPM Logo" />
      </section>
    </main>
  );
}

export default Technologies;
