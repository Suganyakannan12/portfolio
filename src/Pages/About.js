import React from "react";
import Work from "../Components/Work";
import { workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20">

      {/* About Me */}
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>

        <p className="text-content py-8 lg:max-w-4xl leading-8">
          Hi, I'm <span className="font-semibold">Suganya</span>, an aspiring
          <span className="font-semibold"> Python Full Stack Developer</span>
          with hands-on experience in building responsive and user-friendly web
          applications. I have worked with HTML, CSS, JavaScript, React, Python,
          Django, Node.js, Express.js, MongoDB, MySQL, and Firebase.
          <br /><br />
          I enjoy solving problems, learning new technologies, and creating
          clean and efficient solutions. I am currently looking for opportunities
          to grow as a Full Stack Developer and contribute to real-world projects.
        </p>
      </section>

      {/* Work Experience */}
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Work Experience
        </h1>

        {React.Children.toArray(
          workDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>

      {/* Education */}
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education & Training
        </h1>

        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;