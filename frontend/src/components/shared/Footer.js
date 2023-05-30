import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

function Footer() {
  return (
    <footer className="absolute w-full flex bottom-0 h-12 justify-between items-center bg-sky-500 dark:bg-slate-800 px-4">
      <div className="flex text-white items-center gap-4">
        <div className="">© Dmitry Kuznetsov 2023</div>
        <a href="mailto:d.kuznetsov.fullstack@gmail.com?subject=Visa requirements issues">
          <AiFillMail size={20} />
        </a>
      </div>
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
