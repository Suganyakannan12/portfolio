import React, { useState } from "react";

const socialMediaUrl = {
  linkedin: "https://www.linkedin.com/in/suganya-kannan-13185835a",
  github: "https://github.com/suganyakannan12",
};

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black shadow-md">
      <div className="container mx-auto max-width flex justify-between items-center py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-gradient">
          Suganya
        </h1>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden cursor-pointer"
          onClick={toggleClass}
        >
          <svg
            width="25"
            height="20"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-dark-heading dark:stroke-white"
          >
            <path
              d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625M1.4375 6.3125H14.5625"
              strokeWidth="1.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Navigation */}
        <nav className={`${isOpen ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row items-center gap-6 font-medium dark:text-light-content">

            <li>
              <a href="#home" onClick={toggleClass}>
                Home
              </a>
            </li>

            <li>
              <a href="#about" onClick={toggleClass}>
                About
              </a>
            </li>

            <li>
              <a href="#technologies" onClick={toggleClass}>
                Tech Stack
              </a>
            </li>

            <li>
              <a href="#projects" onClick={toggleClass}>
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" onClick={toggleClass}>
                Contact
              </a>
            </li>

            {/* LinkedIn */}
            <li>
              <a
                href={socialMediaUrl.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600"
              >
                LinkedIn
              </a>
            </li>

            {/* GitHub */}
            <li>
              <a
                href={socialMediaUrl.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-600"
              >
                GitHub
              </a>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;