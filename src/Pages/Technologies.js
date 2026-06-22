import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    // Frontend
    html,
    css,
    js,
    bootstrap,
    react,
    redux,
    tailwind,

    // Backend
    python,
    django,
    nodejs,
    express,

    // Database
    mongodb,
    mysql,
    sqlite,
    firebase,

    // Tools
    vscode,
    git,
    github,
    npm,
    postman,
    vercel,
  } = techStackDetails;

  return (
    <main className="container mx-auto max-width pt-10 pb-20">

      {/* Frontend */}
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Frontend Technologies
        </h1>

        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>

        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
          <img src={html} title="HTML" alt="HTML" />
          <img src={css} title="CSS" alt="CSS" />
          <img src={js} title="JavaScript" alt="JavaScript" />
          <img src={bootstrap} title="Bootstrap" alt="Bootstrap" />
          <img src={react} title="React" alt="React" />
          <img src={redux} title="Redux" alt="Redux" />
          <img src={tailwind} title="Tailwind CSS" alt="Tailwind CSS" />
        </div>
      </section>

      {/* Backend */}
      <section className="pt-12">
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Backend Technologies
        </h1>

        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
          <img src={python} title="Python" alt="Python" />
          <img src={django} title="Django" alt="Django" />
          <img src={nodejs} title="Node.js" alt="Node.js" />
          <img src={express} title="Express.js" alt="Express.js" />
        </div>
      </section>

      {/* Database */}
      <section className="pt-12">
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Database
        </h1>

        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
          <img src={mongodb} title="MongoDB" alt="MongoDB" />
          <img src={mysql} title="MySQL" alt="MySQL" />
          <img src={sqlite} title="SQLite" alt="SQLite" />
          <img src={firebase} title="Firebase" alt="Firebase" />
        </div>
      </section>

      {/* Tools */}
      <section className="pt-12">
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>

        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
          <img src={vscode} title="VS Code" alt="VS Code" />
          <img src={git} title="Git" alt="Git" />
          <img src={github} title="GitHub" alt="GitHub" />
          <img src={npm} title="NPM" alt="NPM" />
          <img src={postman} title="Postman" alt="Postman" />
          <img src={vercel} title="Vercel" alt="Vercel" />
        </div>
      </section>

    </main>
  );
}

export default Technologies;