import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="flex flex-row items-start text-black text-[13px] gap-10 ml-10 mt-5">
      <button>
        <Link
          to="home"
          smooth={true}
          duration={1500}
          offset={-70}
          className="hover-underline-animation"
        >
          Home
        </Link>
      </button>
      <button>
        <Link
          to="skills"
          smooth={true}
          duration={1500}
          offset={-70}
          className="hover-underline-animation"
        >
          Skills
        </Link>
      </button>
      <button>
        <Link
          to="projects"
          smooth={true}
          duration={1500}
          offset={-70}
          className="hover-underline-animation"
        >
          Projects
        </Link>
      </button>
      <button>
        <Link
          to="work"
          smooth={true}
          duration={1500}
          offset={-70}
          className="hover-underline-animation"
        >
          Work Exp.
        </Link>
      </button>
    </div>
  );
};

export default Navbar;
