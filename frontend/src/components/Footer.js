import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <footer className="absolute w-full flex bottom-0 justify-between items-center bg-sky-500 dark:bg-slate-800 py-2 px-6 h-12">
      <div className="text-white">© Dmitry Kuznetsov 2023</div>
      <nav className="flex text-white">
        <a
          href="https://github.com/dimakuznetsow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/dimakuznetsow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin className="ml-2" size={20} />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
