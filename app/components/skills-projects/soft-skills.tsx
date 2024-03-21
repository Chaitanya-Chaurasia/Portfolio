import React from "react";
import Image from "next/image";
import "../../styles/skills.css";
import skills from "../../../public/skillspic.jpeg";
const SoftSkills = () => {
  return (
    <div className="flex flex-col items-center justify-center  gap-4 p-5 rounded-3xl w-full ">
      <span className="text-[40px] text-white">
        {" "}
        Life is all about learning!{" "}
      </span>
      <Image
        src={skills}
        alt="profilepic"
        height={200}
        className="rounded-full z-10"
      />
      <span className="text-center text-white">
        The way I see it, life is an endless journey of discovery. It is a quest
        that fuels me with a certain insatiable desire to learn. Think about it,
        why are we humans constantly looking to fathom miles deep into the
        oceans or observing galaxies trillions and trillions of light years away
        from us- to grow, and to strive for the betterment of humanity all
        along. And after so many years of learning, I can say that the beauty of
        this journey lies not just in acquiring knowledge, but in the
        realization that there's always more to learn, more to explore and that
        I am merely at the tip of the iceberg. It's a testament to the human
        spirit's boundless curiosity, a reminder that life, in its essence, is
        an endless quest for understanding.
      </span>
      <span className="text-[20px] text-white text-center">
        Some skills that I hold in very high regard and hope to keep on
        polishing upon:
      </span>
      <span className="text-[20px] text-white text-center border-2 border-white p-3 rounded-3xl">
        <ul>
          <li style={{ fontWeight: "bold" }}>
            {" "}
            Be disciplined and patient! There's light at the end of every
            tunnel.
          </li>
          <li style={{ fontWeight: "bold" }}>Lead by example!</li>
          <li style={{ fontWeight: "bold" }}>
            Achieve Excellence in whatever I do!
          </li>
          <li style={{ fontWeight: "bold" }}>& lastly, </li>
          <li style={{ fontWeight: "bold" }}>
            {" "}
            Staying humble and always giving to the world
          </li>
        </ul>
      </span>
    </div>
  );
};

export default SoftSkills;
