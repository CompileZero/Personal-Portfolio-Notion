import React from "react";
import { Nav } from "./nav";
import { ProfileImage } from "../base/profile-image";

export const Hero: React.FC = () => (
  <section className="bg-gray-800">
    <Nav />
    <div className="container ">
      <div className="flex flex-col md:items-center my-16">
        <ProfileImage></ProfileImage>
        <h1 className="text-4xl font-bold text-teal-100">Hey, I'm Atharva!</h1>

        <p className="text-xl md:mx-48 md:text-center text-gray-100">
          I help companies and developers build beautiful software products focused on intuitive UI.
        </p>
        <div className="max-w-sm md:mx-auto my-6 -ml-2">
          <a
            className="mx-1 md:mx-2 py-1 px-2 rounded font-semibold bg-blue-200 hover:bg-blue-300 text-blue-800"
            data-splitbee-event="Open Linkedin"
            href="https://www.linkedin.com/in/atharva-kulkarni-96602a108/"
            target = "_blank"
          >
            Linkedin
          </a>
          <a
            className="mx-1 md:mx-2 py-1 px-2 rounded font-semibold bg-gray-300 hover:bg-gray-400 text-gray-800"
            data-splitbee-event="Open GitHub"
            href="https://github.com/compilezero"
            target = "_blank"
          >
            GitHub
          </a>
          <a
            className="mx-1 md:mx-2 py-1 px-2 rounded font-semibold bg-pink-200 hover:bg-pink-300 text-pink-800"
            data-splitbee-event="Open Website"
            href="https://compilezero.com"
            target = "_blank"
          >
            CompileZero
          </a>
        </div>
      </div>
    </div>
  </section>
);
