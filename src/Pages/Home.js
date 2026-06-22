import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;

  const h11 = useRef(null);
  const h12 = useRef(null);
  const h13 = useRef(null);
  const myimageref = useRef(null);

  const animated = useRef(false); 

  useEffect(() => {
    if (animated.current) return; 
    animated.current = true;

    const tl = gsap.timeline();

    tl.from([h11.current, h12.current, h13.current], {
      x: "-100%",
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: "power3.out",
    });

    if (img && myimageref.current) {
      tl.from(myimageref.current, {
        x: "100%",
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      });
    }
  }, [img]); 

  return (
    <main className="container mx-auto max-width pt-8 md:flex justify-between items-center min-h-[80vh] bg-gradient-to-r from-sky-50 via-indigo-50 to-violet-100 rounded-3xl shadow-lg">
      <div>
        <h1 ref={h11} className="text-2xl md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Hi,👋 <br /> My Name is <br />
        </h1>

        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {name}
        </h1>

        <h2
          ref={h13}
          className="text-2xl md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {tagline}
        </h2>

        <div className="mt-6">
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition-all"
          >
            Download Resume
          </a>
        </div>
      </div>

      {img && (
        <div className="mt-5 md:mt-0 md:ml-auto">
          <img
            ref={myimageref}
            className="w-20 h-20 md:w-28 md:h-28 rounded-full"
            src={img}
            alt={name}
          />
        </div>
      )}
    </main>
  );
}

export default Home;
